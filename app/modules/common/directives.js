'use strict';

angular.module('app.modules.common.directives', [])
    .directive('navLink',function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                text: '@',
                url: '@'
            },
            template: '<li><a href="{{url}}"> {{text}} </a></li>'
        };
    })
    .directive('htmlSelectWidget',function() {
        return {
            restrict: 'E',
            replace:true,
            scope: {
                ngModel: '='
            },
            link:function(scope, element, attrs){
                scope.items = scope.$eval(attrs.items);
            },
            templateUrl: 'modules/common/widgets/select.html'
        };
    });