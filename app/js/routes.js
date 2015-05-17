module.exports = ['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'modules/landing/views/landing.html',
                controller: 'LandingController'
            }).
            when('/list/:classification?/:suburb?/:property?/:min_beds?/:max_beds?/:min_price?/:max_price?', {
                templateUrl: 'modules/listings/views/list.html',
                controller: 'ListingsListController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }];