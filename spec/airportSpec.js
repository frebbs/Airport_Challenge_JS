describe('Airport Class Testing', () => {
    let airport;
    let plane;

    beforeEach( () => {
        airport = new Airport();
        plane = jasmine.createSpy('plane',['landRequest']);
    });

    it('is initialised with an empty hanger', () => {
        expect(airport.hanger()).toEqual([]);
    });

    it('Allows landing at the airport', () => {
        airport.landRequest(plane);
        expect(airport.hanger()).toEqual([plane])
    });

    it('Allows taking off from the airport', () => {
        plane.landRequest(airport);
        plane.liftOff();
        expect(airport.hanger()).toBe.empty();
    })
});