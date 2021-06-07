// $( document ).ready(function() {
  // I got rid of this wrapper because 
  // I wasn't able to use my onClick button function when it was here
  $( "tr > th" ).css( "border", "3px double red" );
  $(".image").click(fadeOutAndIn);
  $(":button").fadeOut();

  function fadeOutAndIn(){
    $( ".image" ).fadeOut();
    $( ":button" ).fadeIn();
  }
  function backIn(){
    $( ".image" ).fadeIn();
    $( ":button" ).fadeOut();
  }
// });
