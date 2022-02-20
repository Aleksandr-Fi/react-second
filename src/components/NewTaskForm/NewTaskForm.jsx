import { Component } from 'react'
import propTypes from 'prop-types'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.onChangeText = (e) => {
      this.setState({
        text: e.target.value,
      })
    }
    this.onSubmit = (e) => {
      e.preventDefault()
      if (this.state.text.trim()) {
        this.props.addTask(this.state.text)
      }
      this.setState({
        text: '',
      })
    }
  }
  static propTypes = {
    addTask: propTypes.func.isRequired,
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label className="input-label">
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onChangeText}
            value={this.state.text}
          />
        </label>
      </form>
    )
  }
}

export default NewTaskForm