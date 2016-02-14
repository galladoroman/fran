'use strict';

describe('Controller: 2abogadoCtrl', function () {

  // load the controller's module
  beforeEach(module('franApp'));

  var 2abogadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    2abogadoCtrl = $controller('2abogadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(2abogadoCtrl.awesomeThings.length).toBe(3);
  });
});
