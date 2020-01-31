class Weather {

    constructor() {
        this._WeatherRandomness = .15
    }

    badConditions() {
        return (Math.random() > this._WeatherRandomness);
    }
}