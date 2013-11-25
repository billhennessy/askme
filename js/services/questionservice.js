/**
 * Created by wil on 11/24/13.
 */
angular.module('fantasyApp.services.questions', ['fantasyApp.services.firebaseRefs'])
    .factory('Questions', ['angularFireCollection', 'FireRef',
        function(angularFireCollection, FireRef) {
            return {
                collection: function(cb) {
                    return angularFireCollection(FireRef.questions(),cb);
                }
                , find: function(questionId) {
                    return FireRef.questions().child('/'+questionId);
                }
                , removeQuestion: function(questionId) {
                    var question = FireRef.questions().child('/'+questionId)
                    question.remove();
                }

                , create: function(question, cb) {
                    return FireRef.questions().push({
                        text: question.text,
                        options: question.options,
                        reverse: question.reverse = ''
                    }, cb).name();
                }
            }
        }])