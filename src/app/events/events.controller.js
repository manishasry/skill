'use strict';

angular.module('bhendi')
        .controller('EventCtrl', function ($scope) {
            $scope.events = [];
            $scope.topics =
                    [
                      {title: 'Percentages'},
                      {title: 'Averages'},
                      {title: 'Work and Time'},
                      {title: 'Pipes and Cisterns'},
                      {title: 'Profit and Loss'},
                      {title: 'Shares'},
                      {title: 'Simple Interest and Compound Interest'},
                      {title: 'Mixtures and Alligations'},
                      {title: 'Permutations and Combinations'},
                      {title: 'Probability'}
                    ];

                    $scope.questions =
                              [
                                {
                                  question:'1. 25 * 25 =',
                                  options:['625','125','225'],
                                  answer: 0
                                },
                                {
                                  question:'2. Acronym for National Aeronautics and Space Administration is',
                                  options:['NAASA','NASA','NOTA'],
                                  answer: 1
                                },
                                {
                                  question:'3. Acrophobia is',
                                  options:['Fear of water','Fear of depth','Fear of heights'],
                                  answer: 2
                                },
                                {
                                  question:'4. 11111 + 1111 + 111 + 11 + 1 = ',
                                  options:['12345','22222','12221'],
                                  answer: 0
                                },
                                {
                                  question:'5. Which of the following is improper fraction? ',
                                  options:['45/100','34/5','88/125'],
                                  answer:1
                                }
                              ];

            $scope.change = function (num,givenans){
              if(givenans === $scope.questions[num].options[$scope.questions[num].answer])
              {
                $scope.questions[num].correctAns=true;
              }
              else {
                 $scope.questions[num].correctAns=false;
              }
              $scope.questions[num].attempted=true;
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
