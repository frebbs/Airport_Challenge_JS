class Weather {

    constructor() {
        this._WeatherRandomness = 0.15
    }

    badConditions() {
        return (Math.random() > this._WeatherRandomness);
    }
}