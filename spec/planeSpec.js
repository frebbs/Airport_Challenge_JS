describe('Plane Class', () => {
    let plane;
    let airport;

    beforeEach( () => {
        plane = new Plane();
        airport = jasmine.createSpyObj('airport', ['landRequest', 'liftOff'])
    });

    it('Lands at the airport', () => {
        plane.landRequest(airport);
        expect(airport.landRequest).toHaveBeenCalledWith(plane);
    });

    it('Allows taking off from the airport', () => {
        plane.landRequest(airport);
        plane.liftOff();
        expect(airport.liftOff).toHaveBeenCalled();
    });
});