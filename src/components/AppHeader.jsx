import { Component } from 'react'
import propTypes from 'prop-types'

class AppHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.propTypes = {
      addTask: propTypes.func.isRequired,
    }
    this.onChangeText = (e) => {
      this.setState({
        text: e.target.value,
      })
    }
    this.onSubmit = (e) => {
      e.preventDefault()
      if (this.state.text.trim()) {
        this.props.addTask(this.state.text)
      }
      this.setState({
        text: '',
      })
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onChangeText}
            value={this.state.text}
          />
        </form>
      </header>
    )
  }
}

export default AppHeader
