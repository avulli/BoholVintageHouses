/**
 * Created by Aleksi on 30.4.2015.
 */

/* This controller is responsible of the showing a single house */
angular.module("Application")
    .controller("HousesShowController", function($routeParams) {
        this.house = houseArray[$routeParams.id - 1]; //Replace with a http get service later
    });

//Static "database" here, TODO: Move to the server in the future, use Node.js, Express.js and MongoDB
var houseArray = [
    {
        id: 1,
        name: "Rocha Suarez",
        long: 10, // dummy example
        lat: 5, // dummy example
        shellWindows: true,  // dummy example
        description: "Description 1"  // dummy example
    },
    {
        id: 2,
        name: "Rocha",
        long: 11,  // dummy example
        lat: 6, // dummy example
        shellWindows: false, // dummy example
        description: "Description 2"
    },
    {
        id: 3,
        name: "Hontanosas",
        long: 12, // dummy example
        lat: 7, // dummy example
        shellWindows: false, // dummy example
        description: "Description 3" // dummy example
    }
];