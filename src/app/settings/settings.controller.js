'use strict';

angular.module('bhendi')
        .controller('SettingsCtrl', function ($scope) {




                  })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.settings', {
                        url: '/settings',
                        views: {
                            '': {
                                templateUrl: 'app/settings/settings.html',
                                controller: 'SettingsCtrl'
                            },
                            'heading': {
                                template: 'Settings'
                            }
                        },
                    });
        });
