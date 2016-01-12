'use strict';

angular.module('bhendi')
        .controller('EventCtrl', function ($scope) {
            $scope.events = [];
            $scope.topics =
                    [
                      {title: "Percentages"},
                      {title: "Averages"},
                      {title: "Work and Time"},
                      {title: "Pipes and Cisterns"},
                      {title: "Profit and Loss"},
                      {title: "Shares"},
                      {title: "Simple Interest and Compound Interest"},
                      {title: "Mixtures and Alligations"},
                      {title: "Permutations and Combinations"},
                      {title: "Probability"}
                    ];

                    $scope.questions =
                              [
                                {
                                  question:'1. 25 * 25 =',
                                  option1:'625',
                                  option2:'125',
                                  option3:'1225',
                                  answer:'625'
                                },
                                {
                                  question:'2. Acronym for National Aeronautics and Space Administration is',
                                  option1:'NAASA',
                                  option2:'NASA',
                                  option3:'None of the above.',
                                  answer:'NASA'
                                },
                                {
                                  question:'3. Acrophobia is',
                                  option1:'Fear of water',
                                  option2:'Fear of depth',
                                  option3:'Fear of heights',
                                  answer:'Fear of heights'
                                },
                                {
                                  question:'4. 11111 + 1111 + 111 + 11 + 1 = ',
                                  option1:'12345',
                                  option2:'22222',
                                  option3:'12221',
                                  answer:'12345'
                                },
                                {
                                  question:'5. Which of the following is improper fraction? ',
                                  option1:'45/100',
                                  option2:'34/5',
                                  option3:'99/125',
                                  answer:'34/5'
                                }
                              ];






            $scope.data = {
                    group1 : ''
                    }

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
