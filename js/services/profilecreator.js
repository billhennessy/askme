'use strict';

angular.module('fantasyApp.services.profileCreator', [])
  .factory('profileCreator', ['Firebase', 'FBURL', '$rootScope', function(Firebase, FBURL, $rootScope) {
    return function(id, name, email, gender, locale, age_range, callback) {
      new Firebase(FBURL).child('users/'+id).set({email: email, name: name, gender: gender, locale: locale, age_range: age_range}, function(err) {
        if( callback ) {
          callback(err);
          $rootScope.$apply();
        }
      });
    }
  }]);