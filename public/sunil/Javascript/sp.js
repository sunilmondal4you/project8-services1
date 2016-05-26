/**
 * Created by abc on 26/05/2016.
 */
var app = angular.module("app");

app.service('myservices',function () {
    this.name='Sunil Mondal';

    this.namelength=function () {

    };
});


app.controller("default",['$scope','$log','myservices', function($scope,$log,myservices){

    $scope.myservices=myservices;

    $scope.$watch('name',function () {
        myservices=$scope.myservices
    });

    $log.log(myservices.name);

}]);

app.controller("second", ['$scope','$log','myservices',function($scope,$log,myservices){

    $scope.myservices=myservices;
    $scope.$watch('name',function () {
        myservices=$scope.myservices
    });

    $log.log(myservices.name);

}]);


app.controller("third", ['$scope','$log','myservices',function($scope,$log,myservices){

    $scope.myservices=myservices;
    $scope.$watch('name',function () {
        myservices=$scope.myservices
    });

    $log.log(myservices.name);

}]);