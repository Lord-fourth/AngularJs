const URL = "https://covid19.mathdro.id/api";

let app = angular.module("MyApp", []);
app.controller("MyCtrl", ($scope, $http) => {
  //controller
  $scope.title = "covid-19 cases";
  $scope.changeValue = () => {
    $scope.title = "Naruto";
  };
  //Calling api
  $http.get(URL).then(
    (response) => {
      //success
      console.log("in success");
      console.log(response.data);
      $scope.allData = response.data;
    },
    (error) => {
      //error
      console.log("in error");
      console.log(error);
    }
  );
  $scope.get_cData = () => {
    console.log($scope.c);
    // console.log("url:" + `${URL}/countries/${country}`);
    let country = $scope.c;
    if (country == "") {
      $scope.cData = undefined;
      return;
    }
    $http.get(`${URL}/countries/${country}`).then(
      (response) => {
        //console.log("url:" + "${URL}/countries/${country}");
        console.log(response.data);
        $scope.cData = response.data;
      },
      (error) => {
        console.log(error.data);

        console.log(error);
      }
    );
  };
});
