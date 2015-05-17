'use strict';

angular.module('app.modules.landing.controllers', ['app.modules.landing.services'])
    .controller('LandingController', [ '$scope', 'LandingService',
        function($scope, LandingService) {
            $scope.sponsors = LandingService.sponsors();
            $scope.tools = LandingService.tools();
            $scope.search = {
                classification: 'Buy',
                suburb: 'Melbourne Greater',
                is_include_surrounding: true,
                property: 'Property',
                min_beds: 'Min beds',
                max_beds: 'Max beds',
                min_price: 'Min price',
                max_price: 'Max price'
            };
        }]);