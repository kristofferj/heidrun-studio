const ndjson = require('ndjson')
const fs = require('fs');

fs.createReadStream('./subCategories.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj) {
    console.log(obj._type, obj.name)
})