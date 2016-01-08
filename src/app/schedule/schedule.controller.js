'use strict';

angular.module('bhendi')
        .controller('ScheduleCtrl', function ($scope,$mdDialog) {
            var tabs = [
          { title: 'Jan'},
          { title: 'Feb'},
          { title: 'Mar'},
          { title: 'Apr'},
          { title: 'May'},
          { title: 'June',
            scheduleevent : [
            {
                date:12,
                name:'SDLC'

            },
            {
                date:15,
                name:'Machine learning'

            }
            ],

            examschedule:[
            {
                date:12,
                name:'Unit test',
                subs:['toc   10:00 AM','  os 2:00 PM']
            },
            {
                date:13,
                name:'Unit test',
                subs:['mm 10:00 AM','ds  2:00 PM']
            },
            {
                date:14,
                name:'Unit test',
                subs:['elec  10:00 AM']
            }
            ]
        },
          { title: 'July'},
          { title: 'Aug'},
          { title: 'Sept'},
          { title: 'Oct'},
          {title: 'Nov'},
          {title: 'Dec'}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 5;




                $scope.showInfo=function(){
                    $mdDialog.show({

                    controller: 'ScheduleInfoCtrl',
                    templateUrl: 'app/schedule/scheduledetail/scheduleinfo.html'
                });

                };


        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.schedule', {
                        url: '/schedule',
                        views: {
                            '': {
                                templateUrl: 'app/schedule/schedule.html',
                                controller: 'ScheduleCtrl'
                            },
                            'heading': {
                                template: 'Schedule'
                            }
                        },
                    });
        });
