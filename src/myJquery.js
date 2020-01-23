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

  $("#increase").click(function(){
    thermostat.increase();
    $(".currentTemp").text(thermostat.currentTemperature)
  });
  $("#decrease").click(function(){
    thermostat.decrease();
    $(".currentTemp").text(thermostat.currentTemperature)
  });
  $("#reset").click(function(){
    thermostat.reset();
    $(".currentTemp").text(thermostat.currentTemperature)
  });
  $("#PSM").click(function(){
    console.log("I am clicking PSM button")
    thermostat.togglePowerSavingMode();
    $(".maxTemperature").text(thermostat.maximumTemperature)
    $(".currentTemp").text(thermostat.currentTemperature)
    if (thermostat.powerSavingMode === true ) {
      $(".powerSaveMode").text("power save on")
    } else {
      $(".powerSaveMode").text("power save off")
    }
  });
});
