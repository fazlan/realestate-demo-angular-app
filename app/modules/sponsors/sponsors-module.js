'use strict';

require('./directives');
require('./services');

angular.module('app.modules.sponsors', ['app.modules.sponsors.services', 'app.modules.sponsors.directives']);