class Airport {

    constructor(weather) {
        this._weather = typeof weather != 'undefined' ? weather : new Weather();
        this._hanger = [];
    }

    hanger() {
        return this._hanger;
    }

    landRequest(plane) {
        if(this._weather.badConditions()) {
            throw new Error('Unable to land during stormy Weather')
        }
        this._hanger.push(plane)
    }

    liftOff(plane) {
        if(!this._weather.badConditions()) {
            throw new Error('Unable to take off during stormy Weather')
        }
        this._hanger.pop()
    }

    _goodWeather() {
        return true
    }
}