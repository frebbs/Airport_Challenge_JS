class Airport {

    constructor() {
        this._hanger = [];
    }

    hanger() {
        return this._hanger;
    }

    landRequest(plane) {
        this._hanger.push(plane)
    }

    liftOff(plane) {
        this._hanger.pop()
    }

}