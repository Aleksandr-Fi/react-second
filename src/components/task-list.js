import Task from './task'
import NewTaskForm from './new-task-form'

const TaskList = ( {todos} ) => {

    const elements = todos.map((item) => {
        return (
            <li className="view" key={item.id}>
                <Task {...item} />
                <NewTaskForm {...item} />
            </li>
        )
    })

    return (
        <ul>
            { elements }
        </ul>
    )
}

export default TaskList