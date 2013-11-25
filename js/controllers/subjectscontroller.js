/**
 * Created by wil on 11/19/13.
 */
'use strict';

angular.module('fantasyApp.controllers.subjects', ['fantasyApp.services.subjects'])
    .controller('SubjectsController', ['$scope','$routeParams', '$location', 'angularFire', 'Subjects',
        function($scope, $routeParams, $location, angularFire, Subjects) {

            $scope.subject = {};
            $scope.subjectId = $routeParams.subjectId;

            $scope.findSubjects = function() {
                $scope.subjects = Subjects.collection();
            }

            $scope.findOneSubject = function (subjectId) {
                if(!!$scope.subjectId) {
                    angularFire(Subjects.find($routeParams.subjectId), $scope, 'subject')
                }
            }

            $scope.createSubject = function() {
                var subjectId = Subjects.create($scope.subject, function(err) {
                    if (!err) {
                        $scope.subject = null;
                        $location.path('/subjects/'+subjectId);
                        $scope.$apply();
                    }
                });
            }

            $scope.removeSubject = function(subjectId) {
                Subjects.removeSubject(subjectId);
            }
        }])