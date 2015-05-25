/**
 * Created by Aleksi on 12.5.2015.
 */

/* This file is for routing the different templates */
angular.module("Application")
    .config(function($routeProvider){
        $routeProvider
            .when("/", {
            redirectTo: "/houses"
        })
            .when("/houses", {
            templateUrl: "templates/pages/houses/index.html",
            controller: "housesIndexController",
            controllerAs: "indexController"
        })
            .when("/houses/:id", {
                templateUrl: "templates/pages/houses/show.html",
                controller: "housesShowController",
                controllerAs: "showController"
            })
            .otherwise({redirectTo: "/houses"});
    });