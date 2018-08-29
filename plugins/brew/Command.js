import React from 'react'
import Dialog from 'part:@sanity/components/dialogs/default'
import FormField from 'part:@sanity/components/formfields/default'
import TextInput from 'part:@sanity/components/textinputs/default'
import SearchableSelect from 'part:@sanity/components/selects/searchable'
import Button from 'part:@sanity/components/buttons/default'
import Switch from 'part:@sanity/components/toggles/switch'
import styles from './Command.css'
import commands from './commands'
// import renderjson from 'renderjson'
import Inspector from 'react-json-inspector'

export default class Command extends React.PureComponent {

  state = {
    result: 'No result',
    currentCommand: undefined,
    commandLine: ''
  }

  handleCommandChange = command => {
    this.setState({
      currentCommand: command,
      commandLine: command.command
    })

  }

  handleCommandLineChange = event => {
    const currentCommand = commands.find(c => c.command == event.target.value[0])
    this.setState({
      commandLine: event.target.value,
      currentCommand
    })
  }

  sendCommand = command => {
    fetch(`http://172.16.1.80:3000/api/btnic?${command || 'a'}`)
      .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            this.setState({result: `Error… ${response.status}`})
            return
          }
          // Examine the text in the response
          response.text().then(data => {
            if (data.split('OK').length === 2) {
              const json = JSON.parse(data.split('OK')[1])
              console.log('json', json)
              if (json.length > 1) {
                this.setState({
                  result: json
                })
              } else {
                this.setState({
                  result: 'Try again. Brewtroller responded with empty.'
                })
              }

              if (json[0] === '#') {
                this.setState({
                  result: 'Invalid command'
                })
              }
              
            } else {
              console.log('could not read data', data)
              this.setState({
                result: `could not read data: ${data}`
              })
            }
            
          });
        }
      )
      .catch(err => {
        this.setState({result: `Fetch error… ${err}`})
        console.log('Fetch Error :-S', err);
      })
  }

  handleSend = () => {
    this.sendCommand(this.state.commandLine)
  }

  renderCommand = command => {
    return (
      <div>{command.title} ({command.command})</div>
    )
  }

  render() {
    const {result, currentCommand, commandLine} = this.state
    const {onClose} = this.props

    console.log('commandLine', commandLine)
    console.log('guess command', )

    return (
      <Dialog isOpen onClose={onClose}>
        <div className={styles.dialogContent}>
          <FormField label="Choose command">
            <SearchableSelect
              value={currentCommand}
              items={commands}
              renderItem={this.renderCommand}
              onChange={this.handleCommandChange}
            />
          </FormField>
          <FormField label="Command-line">
            <TextInput value={commandLine} onChange={this.handleCommandLineChange}/>
          </FormField>
          <FormField>
            <Button color="primary" onClick={this.handleSend}>Send command-line</Button>
          </FormField>
          <h3>Result</h3>
          {
            typeof result === 'object' && <div><Inspector data={ {"result": result} } /></div>
          }

          {
            typeof result != 'object' && <pre className={styles.console}>{result}</pre>
          }
        </div>
      </Dialog>
    )
  }
}
