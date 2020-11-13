var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "home.html",
            controller: 'HomeController'
        })
        .when('/first', {
            templateUrl: "first.html",
            controller: 'FirstController'
        })
        .when('/second', {
            templateUrl: "second.html",
            controller: 'SecondController'
        })
        .otherwise({ redirectTo: '/' });
});

app.controller('navCtrl', function ($location, $scope) {
  $scope.currentPage = "home";
  $scope.go = function (page) {
    $location.path('/' + page);
  };
});

app.controller('HomeController', function($scope, $location){});
app.controller('FirstController', function($scope, $location){});
app.controller('SecondController', function($scope, $location){});