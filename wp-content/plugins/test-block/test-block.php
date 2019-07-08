<?php
/**
 * Plugin Name: Test Block
 * Author: Ivan Oliveira
 * Version: 0.0.1
 */
  
function loadMyBlock() {
  wp_enqueue_script(
    'my-new-block',
    plugin_dir_url(__FILE__) . 'test-block.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'loadMyBlock');

function get_the_page(WP_REST_Request $request){

  $page = get_page($request->get_param('id'),null,'display');
  $raw = preg_replace('/<!--(.|\s)*?-->/', '', $page->post_content);
  $xml = simplexml_load_string('<xml>' . $raw . '</xml>');
  $json = json_encode($xml);
  //var_dump($json);
  $page->post_content = $json;
  return $page;
}


add_action( 'rest_api_init', function () {
  register_rest_route( 'blocks/v1', '/page/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'get_the_page',
  ) );
} );