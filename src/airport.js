class Airport {

    constructor() {
        this._hanger = [];
    }

    hanger() {
        return this._hanger;
    }

    landRequest(plane) {
        if(!this._goodWeather()) {
            throw new Error('Unable to land during stormy Weather')
        }
        this._hanger.push(plane)
    }

    liftOff(plane) {
        if(!this._goodWeather()) {
            throw new Error('Unable to take off during stormy Weather')
        }
        this._hanger.pop(plane)
    }

    _goodWeather() {
        return true
    }
}