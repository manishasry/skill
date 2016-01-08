'use strict';

angular.module('bhendi')
        .controller('ScheduleInfoCtrl', function ($scope, $mdDialog) {

            $scope.scheduleinfo=[{
            	name:'Software Development Life cycle',
            	date:'11/07/2015 at 10:00 AM',
            	fees:'Free',
            	guest:'Kaushal Sir',
            	eventtype:'workshop',
            	desc:'It is a two day workshop on software development life cycle.In this 2 days we are developing prototype using Nodejs and Angular Material So it will be fun..!!! '

            }];
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function () {
                $mdDialog.hide();
            };
        });
