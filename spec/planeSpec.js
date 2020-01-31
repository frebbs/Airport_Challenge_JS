describe('Plane Class', () => {
    let plane;
    let airport;

    beforeEach( () => {
        plane = new Plane();
        airport = jasmine.createSpyObj('airport', ['landRequest'])
    });

    it('Lands at the airport', () => {
        plane.landRequest(airport);
        expect(airport.landRequest).toHaveBeenCalledWith(plane);
    })
});