import Task from './task'
import NewTaskForm from './new-task-form'

const TaskList = ( {todos, onDestroy} ) => {

    const elements = todos.map((item) => {

        const {id, className, ...itemProps} = item
        const {field, ...itemTask} = itemProps

        return (
            <li className={className} key={id}>
                <Task {...itemTask}
                    onComplated={() => console.log(`complated`) }
                    onDestroy={() => onDestroy(id)} />
                <NewTaskForm {...field} />
            </li>
        )
    })

    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    )
}

export default TaskList