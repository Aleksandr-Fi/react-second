import { Component } from "react"
import NewTaskForm from './new-task-form'

class Task extends Component {

  state = {
    completes: false
  }

  onComplated = () => {
    this.setState((state) => {
      return {
        completes: !state.completes
      }
    })
  }

  render() {
    const {completed, editing, text, created, field, onDestroy} = this.props
    const {completes} = this.state

    let classNames = ''
    if (completes) {
      classNames += ' completed'
    }
    if (completed) {
      classNames += ' completed'
    }
    if (editing) {
      classNames += ' editing'
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input  className="toggle" type="checkbox"
                  onClick={this.onComplated} />
          <label>
            <span className="description">{text}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"
                  onClick={onDestroy}></button>
        </div>
        <NewTaskForm {...field} />
      </li>
    )
  }
}

export default Task