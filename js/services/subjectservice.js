/**
 * Created by wil on 11/19/13.
 */
angular.module('fantasyApp.services.subjects', ['fantasyApp.services.firebaseRefs'])
    .factory('Subjects', ['angularFireCollection', 'FireRef',
        function (angularFireCollection, FireRef) {
            return {
                collection: function (cb) {
                    return angularFireCollection(FireRef.subjects(), cb);
                }, find: function (subjectId) {
                    return FireRef.subjects().child('/' + subjectId);
                }

                /* , create: function(subject) {
                 return FireRef.subjects().push({
                 name: subject.name,
                 location: subject.location,
                 phone: subject.phone,
                 email: subject.email,
                 age: subject.age,
                 organization: subject.organization,
                 occupation: subject.occupation

                 }).name();
                 }*/, removeSubject: function (subjectId) {
                    var subject = FireRef.subjects().child('/' + subjectId)
                    subject.remove();
                }, create: function (subject, cb) {
                    return FireRef.subjects().push({
                        name: subject.name,
                        location: subject.location,
                        phone: subject.phone,
                        email: subject.email,
                        age: subject.age,
                        organization: subject.organization,
                        occupation: subject.occupation,
                        observations: []
                    }, cb).name();
                }
            }
        }])