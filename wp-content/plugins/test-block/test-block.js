console.log(Object.getOwnPropertyNames(wp.data));

wp.blocks.registerBlockType('brad/border-box', {
    title: 'Simple Box',
    icon: 'smiley',
    category: 'common',
    attributes: {
      content: {type: 'string',source: 'meta', meta: 'content'},
      color: {type: 'string', source: 'meta', meta: 'content'}
    },
    
    edit: function(props) {
      function updateContent(event) {
        props.setAttributes({content: event.target.value})
      }
      function updateColor(value) {
        props.setAttributes({color: value.hex})
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Simple Box"
        ),
        React.createElement("input", { type: "text", value: props.attributes.content, onChange: updateContent }),
        React.createElement(wp.components.ColorPicker, { color: props.attributes.color, onChangeComplete: updateColor })
      );
    },
    save: function(props) {
        console.log(props);
      return wp.element.createElement(
        "h3",
        {classNameX: 'ueba',
        keyEl:12345,
        src:'bora'
        },
        props.attributes.content    
    );
    }
  })




//Remove unwanted blocks  
window.onload = function(){
    //wp.blocks.unregisterBlockType( 'core/code' );
    //wp.blocks.unregisterBlockType( 'core/html' );
    //wp.blocks.unregisterBlockType( 'core/freeform' );
};

//Remove unwanted block features

wp.blocks.registerBlockStyle( 'core/quote', {
    name: 'fancy-quote',
    label: 'Fancy Quote',
} );

fetch('http://localhost:8080/wp-json/blocks/v1/page/2')
.then((res)=>{return res.json()})
.then((data)=>{console.log(data)});

console.log(wp.data.select('core'))
