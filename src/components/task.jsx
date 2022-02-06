import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import propTypes from 'prop-types'

import NewTaskForm from './NewTaskForm'

const Task = (props) => {
  Task.propTypes = {
    completed: propTypes.bool.isRequired,
    editing: propTypes.bool.isRequired,
    text: propTypes.string.isRequired,
    created: propTypes.instanceOf(Date).isRequired,
    onDestroy: propTypes.func.isRequired,
    onEditing: propTypes.func.isRequired,
    onCompleted: propTypes.func.isRequired,
    onChangeForm: propTypes.func.isRequired,
  }

  const { completed, editing, text, created, checked, onDestroy, onEditing, onCompleted, onChangeForm } = props

  let classNames = false
  if (completed) {
    classNames = 'completed'
  }
  if (editing) {
    classNames = 'editing'
  }

  Task.defaultProps = {
    onDestroy: () => {},
    onEditing: () => {},
    onCompleted: () => {},
    onChangeForm: () => {},
  }

  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onCompleted} defaultChecked={checked} />
        <label>
          <span className="description">{text}</span>
          <span className="created">{`created ${formatDistanceToNowStrict(created)} ago`}</span>
        </label>
        <button className="icon icon-edit" title="edit" onClick={onEditing}></button>
        <button className="icon icon-destroy" title="destroy" onClick={onDestroy}></button>
      </div>
      <NewTaskForm value={text} onChangeForm={(text) => onChangeForm(text)} />
    </li>
  )
}

export default Task
