import propTypes from 'prop-types'

const TaskFilter = ({ text, selected, onToggleFilter }) => {
  TaskFilter.propTypes = {
    text: propTypes.string.isRequired,
    selected: propTypes.bool.isRequired,
    onToggleFilter: propTypes.func.isRequired,
  }

  let classNames = false
  if (selected) {
    classNames = 'selected'
  }

  TaskFilter.defaultProps = {
    onToggleFilter: () => {},
  }

  return (
    <button className={classNames ? classNames : undefined} title={text} onClick={onToggleFilter}>
      {text}
    </button>
  )
}

export default TaskFilter
