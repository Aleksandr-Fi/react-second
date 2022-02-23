import { Component } from 'react'
import propTypes from 'prop-types'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      min: '',
      sec: '',
    }
    this.onChange = (e) => {
      const stateUpdate = { [e.target.name]: e.target.value }
      this.setState(stateUpdate)
    }
    this.onSubmit = (e) => {
      e.preventDefault()
      if (this.state.text.trim() && this.state.min && this.state.sec) {
        this.props.addTask(this.state.text, this.state.min, this.state.sec)
      }
      this.setState({
        text: '',
        min: '',
        sec: '',
      })
    }
  }
  static propTypes = {
    addTask: propTypes.func.isRequired,
  }

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <label className="input-label label-new-todo">
          <input
            className="new-todo"
            tabIndex={0}
            name="text"
            placeholder="Task"
            autoFocus
            onChange={this.onChange}
            value={this.state.text}
          />
        </label>
        <label className="input-label label-new-todo-form__timer">
          <input
            className="new-todo-form__timer"
            tabIndex={0}
            name="min"
            placeholder="Min"
            autoFocus
            onChange={this.onChange}
            value={this.state.min}
          />
        </label>
        <label className="input-label label-new-todo-form__timer">
          <input
            className="new-todo-form__timer"
            tabIndex={0}
            name="sec"
            placeholder="Sec"
            autoFocus
            onChange={this.onChange}
            value={this.state.sec}
          />
        </label>
        <label className="input-label">
          <input className="input-submit-timer" type="submit" hidden />
        </label>
      </form>
    )
  }
}

export default NewTaskForm
