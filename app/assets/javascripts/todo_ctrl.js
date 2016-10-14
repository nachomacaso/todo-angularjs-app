(funtion(){
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope){

    $scope.message = "Hello!";

    $scope.user = "Welcome, user!"

    $scope.goodbye = "Goodbye!"
  });
}());