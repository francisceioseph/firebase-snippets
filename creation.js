const dinossaursService = require('./dinossaursService');

const dinossaurName = 'dino_6';
const dinossaur = {
  altura: 56,
  apareceu_em: -60000000,
  desapareceu_em: -50000000,
  comprimento: 25
};

dinossaursService.createDinossaurWithName(dinossaurName, dinossaur)
  .then(() => {
    console.log('Dinossaur created!!!');
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
