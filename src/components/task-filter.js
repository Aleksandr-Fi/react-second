

const TaskFilter = ( {text, selected, onToggleFilter}) => {
    let classNames = ''
    if (selected) {
        classNames += ' selected'
    }

    return <button className={classNames}
                    onClick={onToggleFilter}>{text}</button>
}

export default TaskFilter