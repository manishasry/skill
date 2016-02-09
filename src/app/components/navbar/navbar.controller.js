'use strict';

angular.module('bhendi')
        .controller('NavbarCtrl', function ($scope, $mdSidenav, $state, $mdBottomSheet, $q, $log, $mdToast) {
            $scope.notify = function (msg) {
                var toast = $mdToast.simple()
                        .content(msg)
                        .action('OK')
                        .highlightAction(false)
                        .position('bottom left');
                $mdToast.show(toast);
            };
            $scope.date = new Date();
            /**
             * First hide the bottomsheet IF visible, then
             * hide or Show the 'left' sideNav area
             */
            $scope.toggleMenu = function () {
                var pending = $mdBottomSheet.hide() || $q.when(true);

                pending.then(function () {
                    $mdSidenav('left').toggle();
                });
            };

            $scope.menu1 =
                    [
                        {
                            link: 'home.events',
                            title: 'Events'
                        },
                        {
                            link: 'home.rankings',
                            title: 'Rankings'
                        }
                    ];
                    $scope.menu2 =
                            [
                                {
                                    link: 'home.settings',
                                    title: 'Settings',

                                },
                                {

                                    title: 'Log Out'
                                }
                            ];

            $scope.goto = function (state) {
                $log.debug(state);
                $state.go(state.link);
            };
        });
