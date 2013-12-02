/**
 * Created by wil on 11/24/13.
 */
'use strict';

angular.module('fantasyApp.controllers.questions', ['fantasyApp.services.questions'])
    .controller('QuestionsController', ['$scope','$routeParams', '$location', 'angularFire','Tests', 'Questions',
        function($scope, $routeParams, $location, angularFire, Tests, Questions) {

            $scope.question = {};
            $scope.questionId = $routeParams.questionId;
            $scope.strictsearch = {};
            $scope.findQuestions = function() {
                $scope.questions = Questions.collection();
            }

            $scope.findOneQuestion = function (questionId) {
                if(!!$scope.questionId) {
                    angularFire(Questions.find($routeParams.questionId), $scope, 'question')
                }
            }

            $scope.findTests = function () {
                $scope.tests = Tests.collection();
            }
            $scope.create = function() {
                Questions.create($scope.question, $scope.auth).then(function(questionId) {
                    $scope.question = null;
                    $location.path('/questions/'+questionId);
                })
            }


            $scope.removeQuestion = function(questionId) {
                Questions.removeQuestion(questionId);
            }
        }])