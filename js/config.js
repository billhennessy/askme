'use strict';

// Declare app level module which depends on filters, and services
angular.module('fantasyApp.config', [])

app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/',                                        { templateUrl: 'views/default.html' })
      .when('/signin',                                  { templateUrl: 'views/users/signin.html' })
      .when('/signup',                                  { templateUrl: 'views/users/signup.html' })
  /*        .when('/nflteams',                            { templateUrl: 'views/nfl/list.html', authRequired: true })
          .when('/nflteams/:nflTeamId',                 { templateUrl: 'views/nfl/view.html', authRequired: true })
          .when('/leagues',                             { templateUrl: 'views/leagues/list.html', authRequired: true })
          .when('/leagues/create',                      { templateUrl: 'views/leagues/edit.html', authRequired: true })
          .when('/leagues/:leagueId',                   { templateUrl: 'views/leagues/view.html', authRequired: true })
          .when('/leagues/:leagueId/edit',              { templateUrl: 'views/leagues/edit.html', authRequired: true })
          .when('/players',                             { templateUrl: 'views/players/list.html', authRequired: true })
          .when('/players/:playerId',                   { templateUrl: 'views/players/view.html', authRequired: true })
          .when('/fantasyteams',                        { templateUrl: 'views/fantasyteams/list.html', authRequired: true })
          .when('/fantasyteams/create',                 { templateUrl: 'views/fantasyteams/edit.html', authRequired: true })
          .when('/fantasyteams/:fantasyTeamId',         { templateUrl: 'views/fantasyteams/view.html', authRequired: true })
          .when('/fantasyteams/:fantasyTeamId/edit',    { templateUrl: 'views/fantasyteams/edit.html', authRequired: true })*/
          .when('/subjects/',                          { templateUrl: 'views/subjects/list.html', authRequired: true })
        .when('/subjects/create',                 { templateUrl: 'views/subjects/edit.html', authRequired: true })
            .when('/subjects/:subjectId',         { templateUrl: 'views/subjects/view.html', authRequired: true })
            .when('/subjects/:subjectId/edit',    { templateUrl: 'views/subjects/edit.html', authRequired: true })
          .when('/questions/',                          { templateUrl: 'views/questions/list.html', authRequired: true })
          .when('/questions/create',                 { templateUrl: 'views/questions/edit.html', authRequired: true })
          .when('/questions/:questionId',         { templateUrl: 'views/questions/view.html', authRequired: true })
          .when('/questions/:questionId/edit',    { templateUrl: 'views/questions/edit.html', authRequired: true })
      .otherwise(       { redirectTo: '/' });
    }])
  
  // establish authentication
  .run(['angularFireAuth', 'FBURL', '$rootScope', 
    function(angularFireAuth, FBURL, $rootScope) {
      angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/signin'});
      $rootScope.FBURL = FBURL;
    }])

  // your Firebase URL goes here
  // should look something like: https://blahblahblah.firebaseio.com
  .constant('FBURL', 'https://tellme.firebaseio.com/')


