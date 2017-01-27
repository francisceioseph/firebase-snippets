const firebaseService = require('./firebaseService');

const _findAllDinossaurs = function() {
  let dinossaursPath = 'dinossauros';
  let dinossarusRef  = firebaseService.getRefereceWithPath(dinossaursPath);

  return dinossarusRef.once('value');
};

const _findDinossaurByKey = function(key) {
  let dinossaurPath = `dinossauros/${key}`;
  let dinossaurRef  = firebaseService.getRefereceWithPath(dinossaurPath);

  return dinossaurRef.once('value');
};

const _findDinossaursByHeight = function(height) {
  let dinossaursPath = 'dinossauros';
  let dinossarusRef  = firebaseService.getRefereceWithPath(dinossaursPath);

  return dinossarusRef.orderByChild('altura').equalTo(height).once('value');
};

const _findDinossaursWithHeightBetween = function(minHeight, maxHeight) {
  let dinossaursPath = 'dinossauros';
  let dinossarusRef  = firebaseService.getRefereceWithPath(dinossaursPath);

  return dinossarusRef.orderByChild('altura').startAt(minHeight).endAt(maxHeight).once('value');
};

const _createDinossaurWithName = function(dinossaurName, dinossaur) {
  let dinossaurPath = `dinossauros/${dinossaurName}`;
  let dinossaurRef  = firebaseService.getRefereceWithPath(dinossaurPath);

  return dinossaurRef.set(dinossaur);
};

const _updateDinossaurWithName = function (dinossaurName, dinossaur) {
  let dinossaurPath = `dinossauros/${dinossaurName}`;
  let dinossaurRef  = firebaseService.getRefereceWithPath(dinossaurPath);

  return dinossaurRef.update(dinossaur);
};

const _deleteDinossaurWithName = function(dinossaurName) {
  let dinossaurPath = `dinossauros/${dinossaurName}`;
  let dinossaurRef  = firebaseService.getRefereceWithPath(dinossaurPath);

  return dinossaurRef.remove();
};

module.exports = {
  findAllDinossaurs:  _findAllDinossaurs,
  findDinossaurByKey:  _findDinossaurByKey,
  findDinossaursByHeight:  _findDinossaursByHeight,
  findDinossaursWithHeightBetween:  _findDinossaursWithHeightBetween,
  createDinossaurWithName:  _createDinossaurWithName,
  updateDinossaurWithName:  _updateDinossaurWithName,
  deleteDinossaurWithName:  _deleteDinossaurWithName
};
