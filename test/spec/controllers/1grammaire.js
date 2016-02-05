'use strict';

describe('Controller: 1grammaireCtrl', function () {

  // load the controller's module
  beforeEach(module('franApp'));

  var 1grammaireCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    1grammaireCtrl = $controller('1grammaireCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(1grammaireCtrl.awesomeThings.length).toBe(3);
  });
});
