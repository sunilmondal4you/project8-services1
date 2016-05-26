var app = angular.module("app");

app.service('myservices',function () {
    this.name='Sunil Mondal';

    this.namelength=function () {

    };
});


app.controller("default",['$scope','$log','myservices', function($scope,$log,myservices){

    $scope.name=myservices.name;

    $scope.$watch('name',function () {
        myservices.name=$scope.name;
    });

    $log.log(myservices.name);

}]);

app.controller("second", ['$scope','$log','myservices',function($scope,$log,myservices){

    $scope.name=myservices.name;

    $scope.$watch('name',function () {
        myservices.name=$scope.name;
    });

    $log.log(myservices.name);

}]);


app.controller("third", ['$scope','$log','myservices',function($scope,$log,myservices){

    $scope.name=myservices.name;

    $scope.$watch('name',function () {
        myservices.name=$scope.name;
    });

    $log.log(myservices.name);

}]);
