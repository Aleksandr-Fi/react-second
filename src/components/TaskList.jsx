import propTypes from 'prop-types'

import Task from './Task'

const TaskList = ({ todos, filters, onDestroy, onEditing, onCompleted, onChangeTask }) => {
  TaskList.propTypes = {
    todos: propTypes.array.isRequired,
    filters: propTypes.array.isRequired,
    onDestroy: propTypes.func.isRequired,
    onEditing: propTypes.func.isRequired,
    onCompleted: propTypes.func.isRequired,
    onChangeTask: propTypes.func.isRequired,
  }

  const filter = filters.filter((el) => el.selected)[0].text

  let taskArr = todos
  if (filter === 'Active') {
    taskArr = taskArr.filter((el) => !el.completed)
  }
  if (filter === 'Completed') {
    taskArr = taskArr.filter((el) => el.completed)
  }
  const elements = taskArr.map((item) => {
    const { id, ...itemProps } = item

    return (
      <Task
        key={id}
        {...itemProps}
        onDestroy={() => onDestroy(id)}
        onEditing={() => onEditing(id)}
        onCompleted={() => onCompleted(id)}
        onChangeForm={(text) => onChangeTask(text, id)}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

export default TaskList
