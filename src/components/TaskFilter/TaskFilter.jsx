import propTypes from 'prop-types'

const TaskFilter = ({ text, selected, onToggleFilter }) => {
  TaskFilter.propTypes = {
    text: propTypes.string.isRequired,
    selected: propTypes.bool.isRequired,
    onToggleFilter: propTypes.func.isRequired,
  }

  TaskFilter.defaultProps = {
    onToggleFilter: () => {},
  }

  let classNames = ''
  if (selected) {
    classNames += 'selected'
  }

  return (
    <button className={classNames} title={text} onClick={onToggleFilter}>
      {text}
    </button>
  )
}

export default TaskFilter
