'use strict';

describe('Directive: highchartDirective', function () {

  // load the directive's module
  beforeEach(module('angularLearning2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<highchart-directive></highchart-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the highchartDirective directive');
  }));
});
