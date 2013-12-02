/**
 * Created by wil on 11/30/13.
 */
angular.module('fantasyApp.services.tests', ['fantasyApp.services.firebaseRefs'])
    .factory('Tests', ['angularFireCollection', 'FireRef',
        function(angularFireCollection, FireRef) {
            return {
                collection: function(cb) {
                    return angularFireCollection(FireRef.tests(),cb);
                }
                , find: function(testId) {
                    return FireRef.tests().child('/'+testId);
                }
                , removeTest: function(testId) {
                    var test = FireRef.tests().child('/'+testId)
                    test.remove();
                }

                , create: function(test, cb) {
                    return FireRef.tests().push({
                        name: test.name,
                        questions: []
                    }, cb).name();
                }
            }
        }])