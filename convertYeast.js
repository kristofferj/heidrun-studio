const replace = require('replace-in-file');
const options = {
  files: './yeast.json',
  from: [
    /\"NAME\"/g,
    /"VERSION"/g,
    /"TYPE"/g,
    /"FORM"/g,
    /"LABORATORY"/g,
    /"MIN_TEMPERATURE"/g,
    /"MAX_TEMPERATURE"/g,
    /"FLOCCULATION"/g,
    /"ATTENUATION"/g,
    /"NOTES"/g,
    /"BEST_FOR"/g,
    /"MAX_REUSE"/g,
    /"ADD_TO_SECONDARY"/g,
    /"PRODUCT_ID"/g,
  ],
  to: [
    '"name"',
    '"version"',
    '"type"',
    '"form"',
    '"laboratory"',
    '"minTemp"',
    '"maxTemp"',
    '"flocculation"',
    '"minAttenuation"',
    '"notes"',
    '"bestFor"',
    '"maxReuse"',
    '"addToSecondary"',
    '"productId"',
  ],
};

replace(options)
  .then(changes => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });