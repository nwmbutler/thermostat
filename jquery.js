$('document').ready(function(){

thermostat = new Thermostat();

  $('.visual').text(thermostat.currentTemp());
  dotcolour();

  $('#temperature-up').click(function(){ thermostat.up();
  $('.visual').text(thermostat.currentTemp());
  dotcolour();
  });

  $('#temperature-down').click(function(){ thermostat.down();
  $('.visual').text(thermostat.currentTemp());
  dotcolour();
  });

  $('#temperature-reset').click(function(){ thermostat.reset();
  $('.visual').text(thermostat.currentTemp());
  dotcolour();
  });

  $('#powersaving-on').click(function(){ thermostat.switchPowerSaveOn();
  $('#power-saving-status').text('on');

  });

  $('#powersaving-off').click(function(){ thermostat.switchPowerSaveOff();
  $('#power-saving-status').text('off');

  });

function dotColour(){
  if(thermostat.CurrentUsage() === "low-usage" ) {
    $('#energy-usage-status').css(background-color: green;);
  }
  else if(thermostat.CurrentUsage() === "med-usage") {
    $('#energy-usage-status').css(background-color: black;);
} else {
    $('#energy-usage-status').css(background-color: red;);
}
};
});
