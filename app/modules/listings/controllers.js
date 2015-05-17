'use strict';

angular.module('app.modules.listings.controllers', ['app.modules.listings.services'])
    .controller('ListingsListController', [ '$scope', 'ListingsService', function ($scope, ListingsService) {
        $scope.listings = ListingsService.list();
        $scope.search = {
            property: 'Property',
            min_beds: 'Min beds',
            max_beds: 'Max beds',
            min_price: 'Min price',
            max_price: 'Max price',
            baths:'Bathrooms',
            carports: 'Carports',
            sort: 'Sorted by'
        };
    }]);