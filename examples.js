$( document ).ready(function() {
  $( "tr > th" ).css( "border", "3px double red" );  
  $(":button").fadeOut();

  $(".image").click(function() {
    $( ".image" ).fadeOut();
    $( ":button" ).fadeIn();
  });
  $( ":button" ).on( "click", function() {
    $( ".image" ).fadeIn();
    $( ":button" ).fadeOut();
  });

  /*
  function fadeOutAndIn(){
    $( ".image" ).fadeOut();
    $( ":button" ).fadeIn();
  }
  
  function backIn(){
    $( ".image" ).fadeIn();
    $( ":button" ).fadeOut();
  }
  */
  
});
