const URL = "https://covid19.mathdro.id/api";

let app = angular.module("MyApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider

    .when("/country", {
      templateUrl: "country.html",
      controller: "countryController",
    })
    .when("/", {
      templateUrl: "world.html",
      controller: "worldController",
    })
    .when("/Austria", {
      templateUrl: "austria.html",
      controller: "austriaController",
    });
});
app.controller("MyCtrl", ($scope, $http, $location) => {
  //controller
  $scope.title = "covid-19 cases";
  $scope.countryList = [];
  let country = "";

  //Calling api

  console.log("inside fetch");
  console.log("outside fetch");

  $http.get(`${URL}/countries/`).then(
    (response) => {
      //console.log("url:" + "${URL}/countries/${country}");

      tempResponse = response.data.countries;
      // console.log("country list:" + $scope.countryList);
      tempResponse.forEach((element) => {
        // console.log("element name:" + element.name);
        $scope.countryList.push(element.name);
      });

      console.log(
        "countrylist length:" + Object.keys($scope.countryList).length
      );
    },
    (error) => {
      console.log(error.data);

      console.log(error);
    }
  );
  $http.get(URL).then(
    (response) => {
      //success
      console.log("in success");
      // console.log(response.data);
      $scope.allData = response.data;
    },
    (error) => {
      //error
      // console.log("in error");
      console.log(error);
    }
  );

  $scope.get_cData = () => {
    // console.log($scope.c);
    // country = $scope.c;

    // if (country == "") {
    //   $scope.cData = undefined;
    //   return;
    // }

    /* country list*/
    console.log("hi");

    //go functionn using
    $scope.go($scope.c);
    //country data
    $http.get(`${URL}/countries/${country}`).then(
      (response) => {
        //console.log("url:" + "${URL}/countries/${country}");
        //  console.log(response.data);
        console.log("in country");
        $scope.cData = response.data;
      },
      (error) => {
        console.log(error.data);

        console.log(error);
      }
    );
  };
  $scope.setCountry = function (item) {
    console.log("inside setCountry:" + item);
    country = item;
    $scope.c = item;
    $scope.get_cData();
  };

  $scope.go = function (page) {
    console.log("page is:" + page);
    $location.path("/" + page);
  };
});

app.controller("austriaController", function ($scope, $location) {});
app.controller("countryController", function ($scope, $location) {});
app.controller("worldController", function ($scope, $location) {});
