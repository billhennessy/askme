/**
 * Created by wil on 11/14/13.
 */
'use strict';

angular.module('fantasyApp.services.badgevilleRefs', [])
    .factory('BadgevilleRefs', ['BVSDK', 'Badgeville',
        function(BVSDK, Badgeville) {
            return {
                 players: function() {
                    return new Badgeville(BVSDK+'/players');
                }
                , fantasyTeams: function() {
                    return new Firebase(FBURL+'/fantasyTeams');
                }
            }
        }])
