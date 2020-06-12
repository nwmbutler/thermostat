'use strict'

class Thermostat {
    constructor() {
      this.temperature = 20;
      this.MINTEMP = 10;
      this.MEDENERGYUSE = 18
      this.MAX_LIMIT_PSN_ON = 25;
      this.MAX_LIMIT_PSN_OFF = 32;
      this.powerSaveMode = true;

    };

    Thermostat.prototype = {
  currentTemp: function(callback) {
    $.get('/temperature', function(res) {
      var data = JSON.parse(res)
      callback(data);
    });
  },

    minTemp(){
       return  this.MINTEMP === this.temperature
    };

    switchPowerSaveOff(){
        this.powerSaveMode = false;
    };

    switchPowerSaveOn(){
        this.powerSaveMode = true;
    };

    isPowerSaverOn(){
      return this.powerSaveMode === true;
    };

    isMaxTemp() {
      if (this.isPowerSaverOn() === false) {
         return this.temperature === this.MAX_LIMIT_PSN_OFF;
       }
         return this.temperature === this.MAX_LIMIT_PSN_ON;
    };

    up(){
        if (this.isMaxTemp()) {
            return;
        }
      this.temperature += 1;
    };

    down(){
        if (this.minTemp()) {
        return;
        };
        this.temperature -= 1;
    };

    reset(){
      this.temperature = 20;
    };

    currentUsage(){
      if (this.temperature < this.MEDENERGYUSE) {
      return "low-usage";
    }
      if (this.temperature >= this.MEDENERGYUSE && this.temperature <= this.MAX_LIMIT_PSN_ON) {
      return "med-usage";
    }
    return "high-usage"
  };
  };
