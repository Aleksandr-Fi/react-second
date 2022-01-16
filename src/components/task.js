import { Component } from "react"


class Task extends Component {

  onTaskCkick = () => {
    console.log(`Done: ${this.props.description}`)
  }

  render() {
    const {description, created} = this.props

    return (
      <div className="view"
      onClick={this.onTaskCkick} >
        <input className="toggle" type="checkbox" />
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