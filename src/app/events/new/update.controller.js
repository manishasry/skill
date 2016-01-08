'use strict';

angular.module('bhendi')
        .controller('UpdateEventCtrl', function ($scope, $mdDialog) {





            $scope.types = [{
                    id: 1,
                    name: 'Workshop'
                }, {
                    id: 2,
                    name: 'Seminar'
                }, {
                    id: 3,
                    name: 'Tech Talks'
                }, {
                    id: 4,
                    name: 'Lecture'
                }];
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        });
