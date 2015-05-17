'use strict';

require('./services');
require('./controllers');

angular.module('app.modules.landing', ['app.modules.landing.controllers', 'app.modules.tools', 'app.modules.sponsors']);