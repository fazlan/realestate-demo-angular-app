'use strict';

angular.module('app.modules.navigation.header.directives', ['app.modules.common'])
    .directive('headerSection',function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/navigation/header/widget.html'
        };
    })

angular.module('app.modules.navigation.footer.directives', ['app.modules.common'])
    .directive('socialMedia',function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                network: '@'
            },
            template: '<li><a href=""><span class="sm-{{network}}"></span></a></li>'
        };
    })
    .directive('footerSubSection',function() {
        return {
            restrict: 'E',
            scope: {
                heading: '@'
            },
            link:function(scope, element, attrs){
                scope.items = scope.$eval(attrs.items);
            },
            templateUrl: 'modules/navigation/footer/links-widget.html'
        };
    })
    .directive('footerSection',function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/navigation/footer/widget.html'
        };
    });

angular.module('app.modules.navigation', ['app.modules.navigation.header.directives' , 'app.modules.navigation.footer.directives']);