/**
 * Created by wil on 11/24/13.
 */
'use strict';

angular.module('fantasyApp.controllers.questions', ['fantasyApp.services.questions'])
    .controller('QuestionsController', ['$scope','$routeParams', '$location', 'angularFire', 'Questions',
        function($scope, $routeParams, $location, angularFire, Questions) {

            $scope.question = {};
            $scope.questionId = $routeParams.questionId;

            $scope.findQuestions = function() {
                $scope.questions = Questions.collection();
            }

            $scope.findOneQuestion = function (questionId) {
                if(!!$scope.questionId) {
                    angularFire(Questions.find($routeParams.questionId), $scope, 'question')
                }
            }

            $scope.createQuestion = function() {
                var questionId = Questions.create($scope.question, function(err) {
                    if (!err) {
                        $scope.question = null;
                        $location.path('/questions/'+questionId);
                        $scope.$apply();
                    }
                });
            }

            $scope.removeQuestion = function(questionId) {
                Questions.removeQuestion(questionId);
            }
        }])