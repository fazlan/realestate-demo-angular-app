'use strict';

angular.module('app.modules.sponsors.services', [])
    .service('SponsorService', function() {
        var sponsors = [];

        sponsors.push({
            name: 'Jet Star',
            url: '#/sponsors/jet-star',
            image_url: './img/sponsors/jet-star.jpg'});

        sponsors.push({
            name: 'Wellington NZ',
            url: '#/sponsors/wellington-nz',
            image_url: './img/sponsors/wellington-nz.jpg'});

        this.list = function() { return sponsors; }
    });