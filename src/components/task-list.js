import Task from './task'
import NewTaskForm from './new-task-form'

const TaskList = ( {todos} ) => {

    const elements = todos.map((item) => {

        const {id, ...itemProps} = item
        const {field, ...itemTask} = itemProps

        return (
            <li className="view" key={id}>
                <Task {...itemTask} />
                <NewTaskForm {...field} />
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