'use strict';

angular.module('app.modules.sponsors.directives', [])
    .directive('sponsorDiv',function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/sponsors/widgets/sponsor.html'
        };
    });