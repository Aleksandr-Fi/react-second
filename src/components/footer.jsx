import propTypes from 'prop-types'

import TaskFilter from './task-filter'

const Footer = ({ filters, todos, onToggleFilter, onClearCompleted }) => {
  Footer.propTypes = {
    filters: propTypes.array.isRequired,
    todos: propTypes.array.isRequired,
    onToggleFilter: propTypes.func.isRequired,
    onClearCompleted: propTypes.func.isRequired,
  }

  const leftItems = todos.filter((el) => !el.completed).length
  const leftText = `${leftItems} items left`

  Footer.defaultProps = {
    onClearCompleted: () => {},
  }

  const elements = filters.map((item) => {
    const { id, ...itemProps } = item

    return (
      <li key={id}>
        <TaskFilter {...itemProps} onToggleFilter={() => onToggleFilter(id)} />
      </li>
    )
  })

  return (
    <footer className="footer">
      <span className="todo-count">{leftText}</span>
      <ul className="filters">{elements}</ul>
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
