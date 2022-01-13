import Task from './task'

const TaskList = ( {todos} ) => {

    const elements = todos.map((item) => {
        return <Task {...item} />
    })

    return (
        <ul>
            { elements }
        </ul>
    )
}

export default TaskList