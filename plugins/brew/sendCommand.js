function sendCommand(command, timeout, maxAttempts) {
  let attempts = 0
  if (attempts > maxAttempts) {
    return {error: `Got no response after ${attempts} attempts`}
  }
  
  return fetch(`http://172.16.1.80:3000/api/btnic?${command || 'a'}`)
    .then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status)
        return {err: `Error… ${response.status}`}
      }
      // Examine the text in the response
      return response.text().then(data => {
        if (data.split('OK').length === 2) {
          const json = JSON.parse(data.split('OK')[1])
  
          if (json.length > 1) {
            console.log('got result', json)

            if (json[0] === '#') {
              return {
                error: 'Invalid command params. Check documentation'
              }
            }

            return {result: json}
          } else {
            // Retry
            console.log('try again')
            setTimeout(async () => {
              return await sendCommand(command, timeout, maxAttempts)
            }, timeout)          
          }

          return {
            error: JSON.stringify(json)
          }
          
        } else {
          return {
            error: `could not read data: ${data}`
          }
        }
      })
    }
  )
  .catch(err => {
    console.error('Fetch Error :-S', err);
    return {error: `Fetch error… ${err}`}
  })
}

export default async function(command, timout = 1000, maxAttempts = 10) {
  return await sendCommand(command, timout, maxAttempts)  
}


