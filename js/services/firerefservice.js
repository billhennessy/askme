/**
 * Created by wil on 11/10/13.
 */
'use strict';

angular.module('fantasyApp.services.firebaseRefs', [])
    .factory('FireRef', ['FBURL', 'Firebase',
        function(FBURL, Firebase) {
            return {
            /*    leagues: function() {
                    return new Firebase(FBURL+'/leagues');
                }
                ,*/ users: function() {
                    return new Firebase(FBURL+'/users');
                }
            /*    , players: function() {
                    return new Firebase(FBURL+'/players');
                }
                , fantasyTeams: function() {
                    return new Firebase(FBURL+'/fantasyTeams');
                } */
                , subjects: function() {
                    return new Firebase(FBURL+'/subjects');
                }
                , questions: function(){
                    return new Firebase(FBURL+'/questions');
                }
                , tests: function() {
                    return new Firebase(FBURL+'/tests')
                }

            }
        }])