# Airport Challenge if JS

To get started I will create the usual directories and folders to hold the content and test files

I will work though the user stories as provided for on the Ruby Challenge.

The first user story is:
```
As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport
```

This suggest we will require an Airport and a Plane class. The airport will determine if a plane is able to land
so we will create instances of a plane from its own class that will interact with the Airport class.

Before I begin writing code, I will setup Jasmine for testing and create some initial tests that I can TDD and refactor as needed.

The first test that I will create will be on the airport to allow an airplane to land.

The first test will look like this for the airport class:

```javascript
describe('Class Testing', () => {
    let airport;
    let plane;

    beforeEach( () => {
        airport = new Airport();
        plane = new Plane();
    });

    it('Allows landing at the airport', () => {
        plane.landRequest(airport);
        expect(airport.hanger()).toContain((plane))
    })
});
```

For the plane class, my initial failing test is below:

```javascript
describe('Plane Class', () => {
    let plane;

    beforeEach( () => {
        plane = new Plane();
    });

    it('Lands at the airport', () => {
        expect(plane.landRequest).not.toBe(false);
    })
});
```

This results in the following issues (RED):

```error
Class Testing > Allows landing at the airport
ReferenceError: Airport is not defined
    at <Jasmine>
    at UserContext.<anonymous> (http://127.0.0.1:8080/spec/airportSpec.js:6:9)
    at <Jasmine>
TypeError: Cannot read property 'landRequest' of undefined
    at <Jasmine>
    at UserContext.<anonymous> (http://127.0.0.1:8080/spec/airportSpec.js:11:15)
    at <Jasmine>

Plane Class > Lands at the airport
ReferenceError: Plane is not defined
    at <Jasmine>
    at UserContext.<anonymous> (http://127.0.0.1:8080/spec/planeSpec.js:5:9)
    at <Jasmine>
TypeError: Cannot read property 'landRequest' of undefined
    at <Jasmine>
    at UserContext.<anonymous> (http://127.0.0.1:8080/spec/planeSpec.js:9:22)
    at <Jasmine>
```

To fix the initial issues, I will create the classes and add this in to the Jasmine specrunner.html file.

## First passing test

After some initial issues (Circular logic errors) I have now got all the test passing and Spec Runner show

```html
Plane Class
* Lands at the airport
Airport Class Testing
* is initialised with an empty hanger
* Allows landing at the airport
```

# Onwards and Upwards, taking off from the airport

Second user story

```
As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
```

