'use strict';

describe('Controller: 1abogadoCtrl', function () {

  // load the controller's module
  beforeEach(module('franApp'));

  var 1abogadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    1abogadoCtrl = $controller('1abogadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(1abogadoCtrl.awesomeThings.length).toBe(3);
  });
});
