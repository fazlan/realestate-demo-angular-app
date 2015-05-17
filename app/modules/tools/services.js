'use strict';

angular.module('app.modules.tools.services', [])
    .service('ToolService', function() {
        var tools = [];

        tools.push({
            name: 'Suburb profile',
            image_url: './img/features/suburb-profiles.jpg',
            headline: 'Looking for the perfect pocket to call home?',
            description: 'Uncover details about the architecture, the people or even the lifestyles to find a suburb that clicks.'});

        tools.push({
            name: 'Investment tools',
            image_url: './img/features/investment-tools.jpg',
            headline: 'Compare the property investment potential of different suburbs',
            description: 'Uncover details about the architecture, the people or even the lifestyles to find a suburb that clicks.'});

        tools.push({
            name: 'Property report',
            image_url: './img/features/property-report.jpg',
            headline: 'Get a free property report and connect with a professional for a price estimate',
            description: 'Uncover details about the architecture, the people or even the lifestyles to find a suburb that clicks.'});

        this.list = function() { return tools; }
    });