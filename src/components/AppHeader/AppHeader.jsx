import { Component } from 'react'
import propTypes from 'prop-types'

import NewTaskForm from '../NewTaskForm'

class AppHeader extends Component {
  static propTypes = {
    addTask: propTypes.func.isRequired,
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={this.props.addTask} />
      </header>
    )
  }
}

export default AppHeader
