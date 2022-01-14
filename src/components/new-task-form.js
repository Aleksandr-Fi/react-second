

const NewTaskForm = ( {value = false} ) => {
    if (value) {
        return <input type="text" className="edit" value={value} />
    }
    return null
}

export default NewTaskForm