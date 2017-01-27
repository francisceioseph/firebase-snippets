const dinossaursService = require('./dinossaursService');

const dinossaurName = 'dino_6';
const dinossaur = {
  name: 'Larry'
};

dinossaursService.updateDinossaurWithName(dinossaurName, dinossaur)
  .then(result => {
    console.log('Dinossaur updated!!!', result);
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
