import { Component } from 'react'
import propTypes from 'prop-types'

class NewTaskForm extends Component {
  static propTypes = {
    addTask: propTypes.func.isRequired,
  }

  state = {
    text: '',
    min: '',
    sec: '',
  }

  onChange = (e) => {
    const stateUpdate = { [e.target.name]: e.target.value }
    this.setState(stateUpdate)
  }

  onSubmit = (e) => {
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

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <label className="input-label label-new-todo">
          <input
            className="new-todo"
            tabIndex={0}
            type="text"
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
            type="number"
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
            type="number"
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
