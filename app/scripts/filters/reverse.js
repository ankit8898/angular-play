'use strict';

angular.module('angularLearning2App')
  .filter('reverse', function () {
    return function (input) {
      if (input) {
			return input.split('').reverse().join('');
		};
    };
  });
