import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import propTypes from 'prop-types'
import { useState } from 'react'

const Task = (props) => {
  const {
    text,
    created,
    checked,
    completed,
    editing,
    onDestroy,
    onEditing,
    onCompleted,
    onChangeForm,
    min,
    sec,
    onPlay,
    onStop,
  } = props
  const [label, setLabel] = useState(text)

  const onChangeText = (e) => {
    setLabel(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onChangeForm(label)
  }

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

  Task.defaultProps = {
    onDestroy: () => {},
    onEditing: () => {},
    onCompleted: () => {},
    onChangeForm: () => {},
  }

  const getClassName = () => {
    let classNames = ''
    if (completed) {
      classNames += 'completed'
    }
    if (editing) {
      classNames += ' editing'
    }
    return classNames
  }
  return (
    <li className={getClassName()}>
      <div className="view">
        <label className="input-label label-toggle">
          <input className="toggle" type="checkbox" onChange={onCompleted} checked={checked} />
        </label>
        <label>
          <span className="title" onClick={onCompleted}>
            {label}
          </span>
          <span className="description">
            <button className="icon icon-play" onClick={onPlay}></button>
            <button className="icon icon-pause" onClick={onStop}></button>
            {` ${min}:${sec} `}
          </span>
          <span className="description">{`created ${formatDistanceToNowStrict(created)} ago`}</span>
        </label>
        <button className="icon icon-edit" title="edit" onClick={onEditing}></button>
        <button className="icon icon-destroy" title="destroy" onClick={onDestroy}></button>
      </div>
      <form onSubmit={onSubmit}>
        <label className="input-label label-edit">
          <input
            ref={editing ? (input) => input && input.focus() : null}
            type="text"
            className="edit"
            onChange={onChangeText}
          />
        </label>
      </form>
    </li>
  )
}

export default Task
