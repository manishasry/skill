'use strict';
angular.module('bhendi')
        .controller('MainCtrl', function ($scope, $log) {
            $log.debug('Entering Main controller');
        })
        .config(function ($stateProvider) {
            $stateProvider.state('home.main', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'app/main/main.html',
                        controller: 'MainCtrl'
                    },
                    'heading': {
                        template: 'Dashboard'
                    }
                }
            });
        });
