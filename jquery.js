$('document').ready(function(){

thermostat = new Thermostat();

  $('.visual').text(thermostat.currentTemp());
  dotColour();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=9664cc34416cacaeacba52570a229637&units=metric', function(data) {
    var temp = data.main.temp
    $('.weather').text(temp);
  });

  $('#temperature-up').click(function(){
    thermostat.up();
    $('.visual').text(thermostat.currentTemp());
    dotColour();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    $('.visual').text(thermostat.currentTemp());
    dotColour();
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    $('.visual').text(thermostat.currentTemp());
    dotColour();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSaveOn();
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSaveOff();
    $('#power-saving-status').text('off');
  });

  $('#newCity').click(function() {
    var city = $('#cityChoice').val();
    $('#city').text(city);
    $.get(location(city), function(data) {
    var temp = data.main.temp;
    $('.weather').text(temp);
  })})

  function location(city) {
    return 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=9664cc34416cacaeacba52570a229637&units=metric'
  }

function dotColour(){
  if(thermostat.currentUsage() === "low-usage" ) {
    $('#energy-usage-status').css('background-color', 'green');
  }
  else if(thermostat.currentUsage() === "med-usage") {
    $('#energy-usage-status').css('background-color', 'black');
} else {
    $('#energy-usage-status').css('background-color', "red");
}
};
});
