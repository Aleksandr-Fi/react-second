import TaskFilter from "./task-filter"

const Footer = ( {filters} ) => {

    const elements = filters.map((item) => {
        return <TaskFilter {...item} />
    })

    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <ul className="filters">
                { elements }
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer