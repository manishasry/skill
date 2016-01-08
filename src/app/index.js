'use strict';

angular.module('bhendi', ['ngAnimate', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial'])
        .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, $locationProvider) {
            $stateProvider
                    .state('home', {
                        templateUrl: 'app/components/navbar/navbar.html',
                        controller: 'NavbarCtrl',
                        abstract: true
                    });
            $urlRouterProvider.otherwise('/');
            $mdIconProvider
                    .icon('menu', '../assets/svg/menu.svg', 24);

            $mdThemingProvider.theme('default')
                    .primaryPalette('brown')
                    .accentPalette('red');
        })
        ;
