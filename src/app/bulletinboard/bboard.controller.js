'use strict';

angular.module('bhendi')
        .controller('BoardCtrl', function ($scope) {

        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.board', {
                        url: '/board',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/bboard.html',
                                controller: 'BoardCtrl'
                            },
                            'heading': {
                                template: 'Bulletin Board'
                            }
                        },
                    });
        });
