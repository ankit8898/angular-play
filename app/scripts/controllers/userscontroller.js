'use strict';

angular.module('angularLearning2App')
  .controller('UserscontrollerCtrl', function ($scope) {
    $scope.users = [{name: 'Ankit',age: 27},{name: 'Ankit1',age: 27}]

    $scope.submit = function() {
    	$scope.users.push({name: $scope.name, age: 12});
    	console.log($scope.users);
    };
  });
