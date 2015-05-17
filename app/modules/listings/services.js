'use strict';

angular.module('app.modules.listings.services', [])
    .service('ListingsService', function () {
        var results = [];

        results.push({
            street_address: '132 Preddys Road, Mitcham, VIC 3132',
            agent: 'Barry Tree',
            image: 'img/listings/listing-132.jpg',
            headline: 'Contact Agent',
            is_auction: true,
            property_type: 'House',
            rooms: '4',
            baths: '2',
            carports: '2',
            summary: 'Recently renovated home with indoor/outdoor living',
            description: 'Peacefully set at the rear in a boutique complex of only six, this freestanding villa boasts a sunlit spacious layout with...',
            agent_name: 'Shaun Hogan'});

        results.push({
            street_address: '101A Kings St, Box Hill, VIC 3128',
            agent: 'Ray Green',
            image: 'img/listings/listing-101a.jpg',
            headline: 'Contact Agent',
            is_auction: false,
            property_type: 'House',
            rooms: '3',
            baths: '2',
            carports: '2',
            summary: 'Recently renovated home with indoor/outdoor living',
            description: 'Peacefully set at the rear in a boutique complex of only six, this freestanding villa boasts a sunlit spacious layout with...',
            agent_name: 'John Lews'});

        this.list = function() { return results; }
    });
