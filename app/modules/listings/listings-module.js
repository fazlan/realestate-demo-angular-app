'use strict';

require('./directives');
require('./services');
require('./controllers');

angular.module('app.modules.listings', ['app.modules.listings.controllers', 'app.modules.listings.directives']);