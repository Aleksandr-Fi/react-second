import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import propTypes from 'prop-types'
import { Component } from 'react'

import NewTaskForm from '../NewTaskForm/NewTaskForm'

export default class Task extends Component {
  propTypes = {
    completed: propTypes.bool.isRequired,
    editing: propTypes.bool.isRequired,
    text: propTypes.string.isRequired,
    created: propTypes.instanceOf(Date).isRequired,
    onDestroy: propTypes.func.isRequired,
    onEditing: propTypes.func.isRequired,
    onCompleted: propTypes.func.isRequired,
    onChangeForm: propTypes.func.isRequired,
  }

  getClassName() {
    let classNames = ''
    if (this.props.completed) {
      classNames += 'completed'
    }
    if (this.props.editing) {
      classNames += ' editing'
    }
    return classNames
  }

  defaultProps = {
    onDestroy: () => {},
    onEditing: () => {},
    onCompleted: () => {},
    onChangeForm: () => {},
  }

  render() {
    const { text, created, checked, onDestroy, onEditing, onCompleted, onChangeForm } = this.props
    return (
      <li className={this.getClassName()}>
        <div className="view">
          <label className="input-label label-toggle">
            <input className="toggle" type="checkbox" onChange={onCompleted} defaultChecked={checked} />
          </label>
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
}
