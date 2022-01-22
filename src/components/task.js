import { Component } from "react"
import NewTaskForm from './new-task-form'

class Task extends Component {

  render() {
    const {completed, editing, text, created,
        onDestroy, onEditing, onCompleted, onChangeForm} = this.props

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
            <span className="created">{`created ${created} ago`}</span>
          </label>
          <button className="icon icon-edit"
                  onClick={onEditing}></button>
          <button className="icon icon-destroy"
                  onClick={onDestroy}></button>
        </div>
        <NewTaskForm value={text}
                      onChangeForm={(text) => onChangeForm(text)} />
      </li>
    )
  }
}

export default Task