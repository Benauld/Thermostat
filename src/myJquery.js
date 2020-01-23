$(document).ready(function(){
  var thermostat = new Thermostat()
  $(".currentTemp").text(thermostat.currentTemperature)
  $(".minTemperature").text(thermostat.minimumTemperature)
  $(".maxTemperature").text(thermostat.maximumTemperature)
  if (thermostat.powerSavingMode === true ) {

    $(".powerSaveMode").text("power save on")
} else {
    $(".powerSaveMode").text("power save off")
}  
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
