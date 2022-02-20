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
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <label className="input-label">
          <input
            className="new-todo"
            placeholder="Task"
            autoFocus
            onChange={this.onChangeText}
            value={this.state.text}
          />
        </label>
        {/* <label className="input-label"> */}
        <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        {/* </label> */}
        {/* <label className="input-label"> */}
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
        {/* </label> */}
      </form>
    )
  }
}

export default NewTaskForm
