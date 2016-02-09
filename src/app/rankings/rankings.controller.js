'use strict';

angular.module('bhendi')
        .controller('RankCtrl', function ($scope) {

    $scope.participants = [
      {
        who: 'Nivedita',
        roll: '20120602',
        marks: "34/35"
      },
      {
        who: 'Priyanka',
        roll: '20120617',
        marks: "32/34"
      },
      {
        who: 'Rajhans',
        roll: '20120620',
        marks: "36/38"
      },
      {
        who: 'Chaitanya',
        roll: '20120621',
        marks: "40/42"
      },
      {
        who: 'Abhijeet',
        roll: '20120624',
        marks: "54/55"
      },
    ];




                  })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.rankings', {
                        url: '/rankings',
                        views: {
                            '': {
                                templateUrl: 'app/rankings/rankings.html',
                                controller: 'RankCtrl'
                            },
                            'heading': {
                                template: 'Ranks'
                            }
                        },
                    });
        });
