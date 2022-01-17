import Task from './task'

const TaskList = ( {todos, filters, onDestroy, onEditing, onCompleted} ) => {

    const filter = filters.filter((el) => el.selected)[0].text

    let taskArr = todos
    if (filter === 'Active') {
        taskArr = taskArr.filter((el) => el.completed === false)
    }
    if (filter === 'Completed') {
        taskArr = taskArr.filter((el) => el.completed === true)
    }
    const elements = taskArr.map((item) => {

        const {id, ...itemProps} = item

        return (
            <Task  key={id}
                {...itemProps}
                onDestroy={() => onDestroy(id)}
                onEditing={() => onEditing(id)}
                onCompleted={() => onCompleted(id)} />
        )
    })

    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    )
}

export default TaskList