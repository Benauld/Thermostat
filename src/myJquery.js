$(document).ready(function(){
  var thermostat = new Thermostat()
 updateCurrentTemperature() 
  $(".minTemperature").text(thermostat.minimumTemperature)
  $(".maxTemperature").text(thermostat.maximumTemperature)
  if (thermostat.powerSavingMode === true ) {
    $(".powerSaveMode").text("power save on")
  } else {
    $(".powerSaveMode").text("power save off")
  }

  $("#increase").click(function(){
    thermostat.increase();
   updateCurrentTemperature() 
  });
  $("#decrease").click(function(){
    thermostat.decrease();
   updateCurrentTemperature() 
  });
  $("#reset").click(function(){
    thermostat.reset();
   updateCurrentTemperature() 
  });
  $("#PSM").click(function(){
    console.log("I am clicking PSM button")
    thermostat.togglePowerSavingMode();
    $(".maxTemperature").text(thermostat.maximumTemperature)
    updateCurrentTemperature()
    if (thermostat.powerSavingMode === true ) {
      $(".powerSaveMode").text("power save on")
    } else {
      $(".powerSaveMode").text("power save off")
    }
  });
  function updateCurrentTemperature() {
    $(".currentTemp").text( thermostat.currentTemperature)
    $(".currentTemp").attr("id", thermostat.currentEnergyUsage())
  }
  
});

