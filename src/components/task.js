import { Component } from "react"


class Task extends Component {

  render() {
    const {description, created, onComplated} = this.props

    return (
      <div className="view">
        <input  className="toggle" type="checkbox"
                onClick={onComplated} />
        <label>
          <span className="description">{description}</span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
  )
  }
}

export default Task