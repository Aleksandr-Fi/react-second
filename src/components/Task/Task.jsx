import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import propTypes from 'prop-types'
import { Component } from 'react'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text,
    }
    this.onChangeText = (e) => {
      const newValue = e.target.value
      this.setState({
        text: newValue,
      })
    }
    this.onSubmit = (e) => {
      e.preventDefault()
      this.props.onChangeForm(this.state.text)
    }
  }

  static propTypes = {
    completed: propTypes.bool.isRequired,
    editing: propTypes.bool.isRequired,
    text: propTypes.string.isRequired,
    created: propTypes.instanceOf(Date).isRequired,
    onDestroy: propTypes.func.isRequired,
    onEditing: propTypes.func.isRequired,
    onCompleted: propTypes.func.isRequired,
    onChangeForm: propTypes.func.isRequired,
  }

  static defaultProps = {
    onDestroy: () => {},
    onEditing: () => {},
    onCompleted: () => {},
    onChangeForm: () => {},
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

  render() {
    const { created, checked, onDestroy, onEditing, onCompleted, min, sec, onPlay, onStop } = this.props
    return (
      <li className={this.getClassName()}>
        <div className="view">
          <label className="input-label label-toggle">
            <input className="toggle" type="checkbox" onChange={onCompleted} checked={checked} />
          </label>
          <label>
            <span className="title" onClick={onCompleted}>
              {this.state.text}
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
        <form onSubmit={this.onSubmit}>
          <label className="input-label label-edit">
            <input
              ref={this.props.editing ? (input) => input && input.focus() : null}
              type="text"
              className="edit"
              // defaultValue={text}
              onChange={this.onChangeText}
            />
          </label>
        </form>
      </li>
    )
  }
}
