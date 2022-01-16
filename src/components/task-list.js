import Task from './task'

const TaskList = ( {todos, onDestroy} ) => {

    const elements = todos.map((item) => {

        const {id, ...itemProps} = item

        return (
            <Task  key={id}
                {...itemProps}
                onDestroy={() => onDestroy(id)} />
        )
    })

    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    )
}

export default TaskList