

const TaskFilter = ( {text, className = false}) => {
    return (
        <li>
            <button className={className}>{text}</button>
        </li>
    )
}

export default TaskFilter