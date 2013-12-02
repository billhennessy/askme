/**
 * Created by wil on 11/30/13.
 */
'use strict';

angular.module('fantasyApp.controllers.tests', ['fantasyApp.services.tests'])
    .controller('TestsController', ['$scope','$routeParams', '$location', 'angularFire', 'Tests',
        function($scope, $routeParams, $location, angularFire, Tests) {

            $scope.test = {};
            $scope.testId = $routeParams.testId;

            $scope.findTests = function() {
                $scope.tests = Tests.collection();
            }

            $scope.findOneTest = function (testId) {
                if(!!$scope.testId) {
                    angularFire(Tests.find($routeParams.testId), $scope, 'test')
                }
            }

            $scope.createTest = function() {
                var testId = Tests.create($scope.test, function(err) {
                    if (!err) {
                        $scope.test = null;
                        $location.path('/tests/'+testId);
                        $scope.$apply();
                    }
                });
            }

            $scope.removeTest = function(testId) {
                Tests.removeTest(testId);
            }
        }])