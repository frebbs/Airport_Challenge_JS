describe('Weather',function(){

    let weather;

    beforeEach( () => {
        weather = new Weather();
    });

    it('Rarely Stormy', () => {
        spyOn(Math,'random').and.returnValue(1);
        expect(weather.badConditions()).toBeTruthy();
    });
    it('Mostly good weather', () => {
        spyOn(Math,'random').and.returnValue(0);
        expect(weather.badConditions()).toBeFalsy();
    });
});