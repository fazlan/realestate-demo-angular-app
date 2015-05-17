require('angular/angular');
require('angular-route/angular-route');

require('../modules/common/common-module');
require('../modules/navigation/navigation-module');
require('../modules/landing/landing-module.js');
require('../modules/listings/listings-module.js');

angular
    .module('app', ['ngRoute', 'app.modules.common', 'app.modules.navigation', 'app.modules.listings', 'app.modules.landing' ])
    .config(require('./routes'));
