  $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )   
        $("#droppable").css("background-image", "url(imagenes/papelerallena.png)" );
        $("#droppable").css("left", "40.5em" );
        $("#droppable").css("width", "14rem" );
        $("#droppable").css("height", "14rem" );
        $("#draggable").css("display", "none" );
      }
      
    });
  } );