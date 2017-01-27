const firebase = require('./firebaseConfig');

const _getRefereceWithPath = function(path) {
  return firebase.database().ref(path);
};

module.exports = {
  getRefereceWithPath: _getRefereceWithPath
};
