const dinossaursService = require('./dinossaursService');

dinossaursService.findAllDinossaurs()
  .then(dinossaursSnapshot => {
    console.log('Number of Dinos: ', dinossaursSnapshot.numChildren());

    dinossaursSnapshot.forEach(dinossaurSnapshot => {
      console.log(`Hello, my dino id is: ${dinossaurSnapshot.key}`);
    })
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });

dinossaursService.findDinossaurByKey('dino_01')
  .then(dinossaurSnap => {
    let dinossaur = dinossaurSnap.val();

    console.log(`Hello! I'm ${dinossaurSnap.key}.`);
    console.log('This is my personal information as a JSON: ');
    console.log(dinossaur);

    process.exit(0);
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });

dinossaursService.findDinossaursWithHeightBetween(10, 33)
  .then(dinossaursSnapshot => {
    console.log('Number of Dinos found: ', dinossaursSnapshot.numChildren());
    console.log('These are your dinos: ');

    dinossaursSnapshot.forEach(dinossaurSnapshot => {
      console.log(dinossaurSnapshot.key);
    })
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
