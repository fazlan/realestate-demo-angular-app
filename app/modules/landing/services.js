'use strict';

require('../../modules/sponsors/sponsors-module.js');
require('../../modules/tools/tools-module.js');

angular.module('app.modules.landing.services', [ 'app.modules.tools.services', 'app.modules.sponsors.services'])
    .service('LandingService',
        function(SponsorService, ToolService) {
            this.sponsors = function() { return SponsorService.list(); };
            this.tools = function() { return ToolService.list(); };
        });