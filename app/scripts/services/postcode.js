'use strict';

angular.module('ajs3App')
  .service('postcode', function ($http) {

    this.getIrishAddressDetails = function(address) {
      var promise = $http.get('http://localhost:8070/eir/postcoder/address/' + address);
      promise = promise.then(function (response) {
        return response.data;
      });
      return promise;
    };

    this.getIrishGeoAddressDetails = function(address) {
      var promise = $http.get('http://localhost:8070/eir/postcoder/addressgeo/' + address);
      promise = promise.then(function (response) {
        return response.data;
      });
      return promise;
    };

    this.getIrishCoordinateDetails = function(address) {
      var promise = $http.get('http://localhost:8070/eir/postcoder/position/' + address);
      promise = promise.then(function (response) {
        return response.data;
      });
      return promise;
    };

    this.getIrishReverseAddressDetails = function(latitude, longitude, distance) {
      var promise = $http.get('http://localhost:8070/eir/postcoder/rgeoaddress/' + latitude + '/' + longitude + '/' + distance);
      promise = promise.then(function (response) {
        return response.data;
      });
      return promise;
    };

    this.getUKAddressDetails = function(address) {
      var promise = $http.get('http://localhost:8070/uk/postcoder/address/' + address);
      promise = promise.then(function (response) {
        return response.data;
      });
      return promise;
    };

    this.getUKStreetDetails = function(address) {
      var promise = $http.get('http://localhost:8070/uk/postcoder/street/' + address);
      promise = promise.then(function (response) {
        return response.data;
      });
      return promise;
    };

    this.validateUKAddress = function(address) {
      var promise = $http.get('http://localhost:8070/uk/postcoder/address/validate/' + address);
      promise = promise.then(function (response) {
        return response.data;
      });
      return promise;
    };

  });
