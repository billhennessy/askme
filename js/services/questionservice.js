/**
 * Created by wil on 11/24/13.
 */
angular.module('fantasyApp.services.questions', ['fantasyApp.services.firebaseRefs'])
    .factory( 'Questions', ['$q','angularFireCollection', 'FireRef',
        function($q, angularFireCollection, FireRef) {
            return {
                collection: function(cb) {
                    return angularFireCollection(FireRef.questions(),cb);
                }
                , find: function(questionId) {
                    return FireRef.questions().child('/'+questionId);
                }
                , removeQuestion: function(questionId) {
                    var question = this.find(questionId);
                    question.once('value',function(data) {
                        FireRef.tests().child('/'+data.val().testId).child('/questions/'+questionId).remove();
                                           })
                    question.remove();
                    return;
                }

                , create: function(question,test, cb) {
                    var name;
                    var deferred = $q.defer();
                    name = FireRef.questions().push({
                        testId: question.testId,
                        text: question.text,

                        options: question.options,
                        category: question.category,
                        reverse: question.reverse = false
                    }, cb).name();
                    FireRef.tests().child('/'+question.testId+'/questions/'+name).set(true);
                    deferred.resolve(name);
                    return deferred.promise;

                }
            }
        }])