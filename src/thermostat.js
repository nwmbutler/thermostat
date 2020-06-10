'use strict'

class Thermostat {
    constructor() {
      this.temperature = 20;
      this.MINTEMP = 10;
      this.MAX_LIMIT_PSN_ON = 25;
      this.MAX_LIMIT_PSN_OFF = 32;
      this.powerSaveMode = true;

    };

    currentTemp(){
        return this.temperature

    };

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
  };
