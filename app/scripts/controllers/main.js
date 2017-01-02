'use strict';

/**
 * @ngdoc function
 * @name ajs3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ajs3App
 */
angular.module('ajs3App')
  .controller('MainCtrl', function ($scope, postcode) {
    $scope.itemArray = [
      {id: 1, name: 'Ireland', url:'images/irelandFlag.png'},
      {id: 2, name: 'United Kindom', url:'images/ukFlag.png'}
    ];

    $scope.alerts = [];

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.isVisibleMainForm = true;
    $scope.isVisibleIrishForm = false;
    $scope.isVisibleUKForm = false;
    $scope.isVisibleGrid = false;

    $scope.isStubLoading = false;

    $scope.isShowMask = false;

    $scope.selectCountry = function() {

      var countryCode = $scope.itemArray.selected.id;

      if (countryCode) {
        if (countryCode === 1) {
          $scope.isVisibleIrishForm = true;
          $scope.isVisibleMainForm = false;
          $scope.isVisibleUKForm = false;


        } else if (countryCode === 2) {
          $scope.isVisibleUKForm = true;
          $scope.isVisibleMainForm = false;
          $scope.isVisibleIrishForm = false;

        }
      } else {
        $scope.isVisibleMainForm = true;
      }
    };

    $scope.resetCountry = function() {
      $scope.itemArray.selected = '';
    };

    $scope.searchIrishAddress = function(address) {
      if (address === undefined || address.trim().length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'Invalid address details.' });
      } else {
        $scope.isShowMask = true;
        $scope.isStubLoading = true;
        $scope.isVisibleGrid = true;
        $scope.gridOptions = {
          enableSorting: true,
          enableColumnResizing: true,
          showGridFooter: true,
          columnDefs: [
            { name: 'Primary Address', field:'addressline1', width:'100'},
            { name: 'Secondary Address', field:'addressline2', width:'100' },
            { name: 'Summary', field:'summaryline', enableSorting: false , width:'100'},
            { name: 'Organisation', field:'organisation' , width:'100'},
            { name: 'Street', field:'street', width:'100' },
            { name: 'Post Town', field:'posttown', width:'100'},
            { name: 'County', field:'county', width:'100'},
            { name: 'Postcode', field:'postcode', width:'100'}
          ]
        };

        postcode.getIrishAddressDetails(address).then(function(result) {
          $scope.gridOptions.data = result.data;
          $scope.isShowMask = false;
        });
      }
    };

    $scope.reset = function() {
      $scope.isVisibleGrid = false;
    };

    $scope.searchIrishGeoAddress = function(address) {
      if (address === undefined || address.trim().length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'Invalid address details.' });
      } else {
        $scope.isShowMask = true;
        $scope.isStubLoading = true;
        $scope.isVisibleGrid = true;
        $scope.gridOptions = {
          enableSorting: true,
          enableColumnResizing: true,
          showGridFooter: true,
          columnDefs: [
            { name: 'Summary', field:'summaryline', enableSorting: false , width:'100'},
            { name: 'Organisation', field:'organisation' , width:'100'},
            { name: 'Street', field:'street', width:'100' },
            { name: 'Post Town', field:'posttown', width:'100'},
            { name: 'County', field:'county', width:'100'},
            { name: 'Postcode', field:'postcode', width:'100'},
            { name: 'Number', field:'number', width:'100'},
            { name: 'Premise', field:'premise', width:'100'},
            { name: 'Latitude', field:'latitude', width:'100'},
            { name: 'Longitude', field:'longitude', width:'100' }
          ]
        };

        postcode.getIrishGeoAddressDetails(address).then(function(result) {
          $scope.gridOptions.data = result.data;
          $scope.isShowMask = false;
        });
      }
    };

    $scope.searchIrishCoordinate = function(address) {
      if (address === undefined || address.trim().length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'Invalid address details.' });
      } else {
        $scope.isShowMask = true;
        $scope.isStubLoading = true;
        $scope.isVisibleGrid = true;
        $scope.gridOptions = {
          enableSorting: true,
          enableColumnResizing: true,
          showGridFooter: true,
          columnDefs: [
            { name: 'Latitude', field:'latitude', width:'100'},
            { name: 'Longitude', field:'longitude', width:'100' }
          ]
        };

        postcode.getIrishCoordinateDetails(address).then(function(result) {
          $scope.gridOptions.data = result.data;
          $scope.isShowMask = false;
        });
      }
    };

    $scope.searchIrishReverseAddress = function(latitude, longitude, distance) {
      if (latitude === undefined || latitude.trim().length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'Invalid latitude details.' });
      } else if (longitude === undefined || latitude.trim().length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'Invalid longitude details.' });
      } else if(distance === undefined || distance.trim().length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'Invalid distance details.' });
      } else {
        $scope.isShowMask = true;
        $scope.isStubLoading = true;
        $scope.isVisibleGrid = true;
        $scope.gridOptions = {
          enableSorting: true,
          enableColumnResizing: true,
          showGridFooter: true,
          columnDefs: [
            { name: 'Summary', field:'summaryline', enableSorting: false , width:'100'},
            { name: 'Organisation', field:'organisation' , width:'100'},
            { name: 'Street', field:'street', width:'100' },
            { name: 'Post Town', field:'posttown', width:'100'},
            { name: 'County', field:'county', width:'100'},
            { name: 'Postcode', field:'postcode', width:'100'},
            { name: 'Number', field:'number', width:'100'},
            { name: 'Premise', field:'premise', width:'100'}
          ]
        };

        postcode.getIrishReverseAddressDetails(latitude, longitude, distance).then(function(result) {
          $scope.gridOptions.data = result.data;
          $scope.isShowMask = false;
        });
      }
    };

    $scope.searchUKAddress = function(address) {
      if (address === undefined || address.trim().length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'Invalid address details.' });
      } else {
        $scope.isShowMask = true;
        $scope.isStubLoading = true;
        $scope.isVisibleGrid = true;
        $scope.gridOptions = {
          enableSorting: true,
          enableColumnResizing: true,
          showGridFooter: true,
          columnDefs: [
            { name: 'Summary', field:'summaryline', enableSorting: false , width:'100'},
            { name: 'Organisation', field:'organisation' , width:'100'},
            { name: 'Street', field:'street', width:'100' },
            { name: 'Post Town', field:'posttown', width:'100'},
            { name: 'County', field:'county', width:'100'},
            { name: 'Postcode', field:'postcode', width:'100'},
            { name: 'Premise', field:'premise', width:'100'},
            { name: 'Building Name', field:'buildingname', width:'100'}
          ]
        };

        postcode.getUKAddressDetails(address).then(function(result) {
          $scope.gridOptions.data = result.data;
          $scope.isShowMask = false;
        });
      }
    };

    $scope.searchUKStreet = function(address) {
      if (address === undefined || address.trim().length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'Invalid address details.' });
      } else {
        $scope.isShowMask = true;
        $scope.isStubLoading = true;
        $scope.isVisibleGrid = true;
        $scope.gridOptions = {
          enableSorting: true,
          enableColumnResizing: true,
          showGridFooter: true,
          columnDefs: [
            { name: 'Summary', field:'summaryline', enableSorting: false , width:'100'},
            { name: 'Dependent Locality', field:'dependentlocality' , width:'100'},
            { name: 'Street', field:'street', width:'100' },
            { name: 'Post Town', field:'posttown', width:'100'},
            { name: 'County', field:'county', width:'100'},
            { name: 'Postcode', field:'postcode', width:'100'}
          ]
        };

        postcode.getUKStreetDetails(address).then(function(result) {
          $scope.gridOptions.data = result.data;
          $scope.isShowMask = false;
        });
      }
    };

    $scope.validateUKAddress = function(address) {
      if (address === undefined || address.trim().length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'Invalid address details.' });
      } else {
        $scope.isShowMask = true;
        postcode.validateUKAddress(address).then(function(result) {
         alert(result.data.valid);
          $scope.isShowMask = false;
        });
      }
    };

  });
