'use strict'

class Thermostat {
    constructor() {
      this.temperature = 20;
      this.MINTEMP = 10;
      this.POWERSAVE = 25;
    //   this.MAXTEMP = 32;
    
    };
  
    currentTemp(){
        return this.temperature
      
    };

    minTemp(){
       return  this.MINTEMP === this.temperature
    };

    // powerSaveOff(){
    //     return this.MAXTEMP === this.temperature
    // }

    powerSaveOn(){
        return this.temperature === this.POWERSAVE
    };
  
    up(){
        if (this.powerSaveOn()) {
            return;
        }
      this.temperature += 1;

    //   if (this.powerSaveOff()) {
    //       return;
    //   }
    //   this.temperature += 1;
    };

    down(){
        if (this.minTemp()) {
        return;
        };
        this.temperature -= 1;
    };
  };