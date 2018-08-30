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
import sendCommand from './sendCommand'

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
    sendCommand(command).then(res => {
      if (res && res.result) {
        this.setState({result: res.result})
      } else if (res) {
        this.setState({
          result: res.error || 'Unknown error'
        })
      } else {
        console.error('No error from sendCommand', res)
      }
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
