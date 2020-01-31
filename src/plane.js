class Plane {

    // Note to self, THIS refers to the instance of this object (Regardless of name given when created)
    landRequest(airport) {
        airport.landRequest(this);
        this._location = airport;
    }

    liftOff () {
        this._location.liftOff();
    }

}