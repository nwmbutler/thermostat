'use strict'

class Thermostat {
    constructor() {
      this.temperature = 20;
      this.MINTEMP = 10;
    
    };
  
    currentTemp(){
        return this.temperature
      
    };

    minTemp(){
       return  this.MINTEMP === this.temperature
    };
  
    up(){
      this.temperature += 1;
    };

    down(){
        if (this.minTemp()) {
        return;
        };
        this.temperature -= 1;
    };
  };