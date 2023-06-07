$("document").ready(function(){
    let handle = $( "#custom-handle" );
    $( "#slider" ).slider({
        min:1,
        max:50,
        value:8,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  
    $('[type="checkbox"]').checkboxradio({
        icon:false
    })
  
    $(document).tooltip();
  
  
  })
  