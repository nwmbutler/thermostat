describe("FizzBuzz", function(){
    
    it ("should return 'Fizz' when number divisibale by 3", function(){
        expect(fizzBuzz(3)).toEqual("Fizz");

    });

    it ("should return 'Buzz' when number is devisable by 5", function(){
        expect(fizzBuzz(5)).toEqual("Buzz");


    });

    it ("should return 'FizzBuzz when number is devisable by 3 and 5", function(){
        expect(fizzBuzz(15)).toEqual("fizzBuzz");

    });

    it ("should return the number when not divisable by 3 or 5", function(){
        expect(fizzBuzz(7)).toEqual(7)


    });

});