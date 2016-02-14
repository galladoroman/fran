'use strict';

/**
 * @ngdoc function
 * @name franApp.controller:1exerciceCtrl
 * @description
 * # 1exerciceCtrl
 * Controller of the franApp
 */
angular.module('franApp')
  .controller('1exerciceCtrl', function ($scope) {
  	 $scope.play1 = function(){

    if ($scope.respuesta1 == 'travaille'){
    		alert($scope.respuesta1 + ' es correcto');
        $scope.respuesta1 = "";
    	}
    	
 }

   $scope.play2 = function(){

    if ($scope.respuesta2 == 'étudies'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

  $scope.play3 = function(){

    if ($scope.respuesta3 == 'voyageons'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play4 = function(){

    if ($scope.respuesta4 == 'entre'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play5 = function(){

    if ($scope.respuesta5 == 'commençons'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play6 = function(){

    if ($scope.respuesta6 == 'passent'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

 $scope.play7 = function(){

    if ($scope.respuesta7 == 'mangeons'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

 $scope.play8 = function(){

    if ($scope.respuesta8 == 'plaçons'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

 $scope.play9 = function(){

    if ($scope.respuesta9 == 'vous'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

 $scope.play11 = function(){

    if ($scope.respuesta11 == 'Ils'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

 $scope.play12 = function(){

    if ($scope.respuesta12 == 'Il'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

 $scope.play13 = function(){

    if ($scope.respuesta13 == 'Nous'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play14 = function(){

    if ($scope.respuesta14 == "J'"){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play15 = function(){

    if ($scope.respuesta15 == 'Tu'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play16 = function(){

    if ($scope.respuesta16 == 'on'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }
 
$scope.play17 = function(){

    if ($scope.respuesta17 == 'vous'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play18 = function(){

    if ($scope.respuesta18 == 'On donne'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play19 = function(){

    if ($scope.respuesta19 == 'On présente'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play20 = function(){

    if ($scope.respuesta20 == 'On aime'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play21 = function(){

    if ($scope.respuesta21 == 'On voyage'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play22 = function(){

    if ($scope.respuesta22 == 'On travaille'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }

$scope.play23 = function(){

    if ($scope.respuesta23 == 'On entre'){
        alert('Correcto');
      }
      else {
        alert('No es correcto');
      } 
 }
  });
