'use strict';

describe('Controller: 1exerciceCtrl', function () {

  // load the controller's module
  beforeEach(module('franApp'));

  var 1exerciceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    1exerciceCtrl = $controller('1exerciceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(1exerciceCtrl.awesomeThings.length).toBe(3);
  });
});
