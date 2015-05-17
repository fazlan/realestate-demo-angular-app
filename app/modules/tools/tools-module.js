'use strict';

require('./directives');
require('./services');

angular.module('app.modules.tools', ['app.modules.tools.services', 'app.modules.tools.directives']);