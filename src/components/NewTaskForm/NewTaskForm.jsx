import { Component } from 'react'
import propTypes from 'prop-types'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      min: 11,
      sec: 6,
    }
    this.onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
    this.onSubmit = (e) => {
      e.preventDefault()
      if (this.state.text.trim()) {
        this.props.addTask(this.state.text, this.state.min, this.state.sec)
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
        {/* <label className="input-label label-new-todo-form__timer">
          <input className="new-todo-form__timer" tabindex="0" name="min" placeholder="Min" autoFocus />
        </label> */}
        {/* <label className="input-label label-new-todo-form__timer">
          <input className="new-todo-form__timer" tabindex="0" name="sec" placeholder="Sec" autoFocus />
        </label> */}
      </form>
    )
  }
}

export default NewTaskForm
