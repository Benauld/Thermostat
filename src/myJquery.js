$(document).ready(function(){
  $("#hide").click(function(){
    console.log("hide")
      $(".button").css('background-color', '#272727');
      $(this).text('show');
      $(this).removeAttr('id');
      $(this).attr('id', 'show');
      $("#show").click(function(){
        console.log("show")
          $(".button").css('background-color', '#2DCE28');
          $(this).text('hide');
          $(this).removeAttr('id');
          $(this).attr('id', 'hide');   
      });
  });


});