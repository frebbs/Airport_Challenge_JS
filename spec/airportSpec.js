describe('Airport Class Testing', () => {
    let airport;
    let plane;
    let weather;

    beforeEach( () => {
        weather = jasmine.createSpyObj('weather', ['badConditions']);
        airport = new Airport(weather);
        plane = jasmine.createSpy('plane',['landRequest']);
    });

    it('is initialised with an empty hanger', () => {
        expect(airport.hanger()).toEqual([]);
    });

    it('Allows landing at the airport', () => {
        weather.badConditions.and.returnValue(false);
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

    it('Deny landing during stormy times', () => {
        // spyOn(airport, '_goodWeather').and.returnValue(false);
        weather.badConditions.and.returnValue(true);
        expect(()=>{airport.landRequest(plane);}).toThrowError('Unable to land during stormy Weather')
    })
});