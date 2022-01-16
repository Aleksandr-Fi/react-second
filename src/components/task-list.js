import Task from './task'

const TaskList = ( {todos, onDestroy} ) => {

    const elements = todos.map((item) => {

        const {id, ...itemProps} = item

        return (
            <Task  key={id}
                {...itemProps}
                onComplated={() => console.log(`complated`) }
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