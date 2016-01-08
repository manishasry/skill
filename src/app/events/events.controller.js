'use strict';

angular.module('bhendi')
        .controller('EventCtrl', function ($scope, $mdDialog, $log, $mdToast) {
            $scope.events = [];

            $scope.data = {
                    group1 : ''
                    }
            $scope.showAdd = function (ev) {


                $mdDialog.show({

                    controller: 'UpdateEventCtrl',
                    templateUrl: 'app/events/new/newEvent.html',
                    targetEvent: ev
                }).then(function (answer) {
                    $log.debug(JSON.stringify(answer));
                    $scope.events.push(answer);
                    $scope.notify('Event Created');
                }, function () {
                    $log.info('You cancelled the dialog.');
                });
            };

            $scope.deleteEvent=function(item){
                $scope.events.splice(item,1);
                $scope.notify('Event Deleted');
            };



        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.events', {
                        url: '/event',
                        views: {
                            '': {
                                templateUrl: 'app/events/events.html',
                                controller: 'EventCtrl'
                            },
                            'heading': {
                                template: 'Questions'
                            }
                        },
                    });
        });
