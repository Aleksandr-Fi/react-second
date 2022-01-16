import TaskFilter from "./task-filter"

const Footer = ( {filters, todos} ) => {

    const leftItems = todos.filter((el) => el.completed === false).length
    const leftText = `${leftItems} items left`

    const elements = filters.map((item) => {

        const {id, ...itemProps} = item

        return (
            <li key={id}>
                <TaskFilter {...itemProps} />
            </li>
        )
    })

    return (
        <footer className="footer">
            <span className="todo-count">{leftText}</span>
            <ul className="filters">
                { elements }
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer