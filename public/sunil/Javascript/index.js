/**
 * Created by abc on 26/05/2016.
 */
var app  = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            "templateUrl" : "first.html",
            "controller" : "default"
        })

        .when("/second", {
            "templateUrl" : "second.html",
            "controller" : "second"
        })

        .when("/third", {
            "templateUrl" : "third.html",
            "controller" : "third"
        })
});