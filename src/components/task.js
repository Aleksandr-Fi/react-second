import { Component } from "react"
import NewTaskForm from './new-task-form'

class Task extends Component {

  render() {
    const {className, description, created, field, onComplated, onDestroy} = this.props

    return (
      <li className={className}>
        <div className="view">
          <input  className="toggle" type="checkbox"
                  onClick={onComplated} />
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