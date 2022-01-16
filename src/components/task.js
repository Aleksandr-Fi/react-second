import { Component } from "react"
import NewTaskForm from './new-task-form'

class Task extends Component {

  render() {
    const {completed, editing, text, created,
        field, onDestroy, onEditing, onCompleted} = this.props

    let classNames = ''
    
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
                  onClick={onCompleted} />
          <label>
            <span className="description">{text}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"
                  onClick={onEditing}></button>
          <button className="icon icon-destroy"
                  onClick={onDestroy}></button>
        </div>
        <NewTaskForm {...field} />
      </li>
    )
  }
}

export default Task