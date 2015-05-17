'use strict';

angular.module('app.modules.tools.directives', [])
    .directive('toolWidget',function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/tools/widgets/tools.html'
        };
    });