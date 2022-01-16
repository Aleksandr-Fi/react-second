

const TaskFilter = ( {text, selected}) => {
    let classNames = ''
    if (selected) {
      classNames += ' selected'
    }

    return <button className={classNames}>{text}</button>
}

export default TaskFilter