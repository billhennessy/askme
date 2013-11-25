/**
 * Created by wil on 11/10/13.
 */
angular.module('fantasyApp.services.leagues', ['fantasyApp.services.firebaseRefs'])
    .factory('Leagues', ['angularFireCollection', 'FireRef',
        function(angularFireCollection, FireRef) {
            return {
                collection: function(cb) {
                    return angularFireCollection(FireRef.leagues(),cb);
                }
                , find: function(leagueId) {
                    return FireRef.leagues().child('/'+leagueId);
                }
                , removeLeague: function(leagueId) {
                    var league = FireRef.leagues().child('/'+leagueId)
                    league.remove();
                }

                , create: function(league, commissioner, cb) {
                    return FireRef.leagues().push({
                        name: league.name,
                        commissionerId: commissioner.id,
                        fantasyTeams: []
                    }, cb).name();
                }
            }
        }])