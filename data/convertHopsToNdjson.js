const jsonQuery = require('json-query')
const ndjson = require('ndjson')
const fs = require('fs');
var XML = require('pixl-xml')
const {transform} = require('lodash')

const HOPS_OUTPUT = './hops.ndjson'
const NUMBER_KEYS = ['VERSION', 'BETA', 'ALPHA', 'AMOUNT', 'TIME', 'HSI']

fs.readFile('./hops.xml', function read(err, data) {
  if (err) {
    throw err;
  }
  const hops = XML.parse( data, {lowerCase: true} )
  const ndJsonHops = ndjson.serialize()

  fs.writeFile(HOPS_OUTPUT, '', err => {
    if(err) {
        return console.log(err);
    }
    console.log(HOPS_OUTPUT + ' Cleared…');
  })

  ndJsonHops.on('data', line => {
    fs.appendFile(HOPS_OUTPUT, line, err => {
      if (err) {
        return console.error(err);
      }
    })
  })

  if (!hops.HOP || hops.HOP.length === 0) {
    console.error('No hops to import')
    return
  }

  console.log(`Importing ${hops.HOP.length} hops`)

  hops.HOP.forEach(hop => {
    ndJsonHops.write({
      _type: 'hop',
      ...hop
    })  
  })
})
