class Thermo

    attr_reader :temperature

    def initialize 
        @temperature = 20
    end

    def self.instance
        @thermostat ||= self.new
    end

    def update(temp)
        @temperature = temp
    end

end