import propTypes from 'prop-types'

import NewTaskForm from '../NewTaskForm'

const AppHeader = ({ addTask }) => {
  AppHeader.propTypes = {
    addTask: propTypes.func.isRequired,
  }

  return (
    <header className="header">
      <h1 className="heading">todos</h1>
      <NewTaskForm addTask={addTask} />
    </header>
  )
}

export default AppHeader
