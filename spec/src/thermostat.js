'use strict'

class Thermostat {
    constructor() {
      this.MINVAL = 10;
      this.temperature = 20;
    };

    currentTemp(){
        return this.temperature

    };

    minimum(){
       return this.temperature === this.MINVAL
    };

    up(){
      this.temperature += 1;
    };

    down(){
        if (this.minimum()) {
        return;
      };
        this.temperature -= 1;
     };
   };
