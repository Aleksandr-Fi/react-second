import { Component } from "react"
import NewTaskForm from './new-task-form'

class Task extends Component {

  state = {
    completed: false
  }

  onComplated = () => {
    this.setState((state) => {
      return {
        completed: !state.completed
      }
      
    })
  }

  render() {
    const {className, description, created, field, onDestroy} = this.props
    const {completed} = this.state

    let classNames = className
    if (completed) {
      classNames += ' completed'
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input  className="toggle" type="checkbox"
                  onClick={this.onComplated} />
          <label>
            <span className="description">{description}</span>
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