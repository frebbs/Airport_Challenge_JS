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

    it('Checks for stormy weather', () => {
       expect(airport._goodWeather()).toBeTruthy();
    });

    it('Deny take off in stormy times', () => {
        spyOn(airport, '_goodWeather').and.returnValue(false);
        expect(()=>{airport.liftOff(plane);}).toThrowError('Unable to take off during stormy Weather')
    });
});