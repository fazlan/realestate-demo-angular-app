'use strict';

angular.module('app.modules.listings.directives', [])
    .directive('listingSummaryWidget',function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'modules/listings/widgets/listing_summary.html'
        };
    });
