

const NewTaskForm = ( {value = false} ) => {
    if (value) {
        return <input type="text" className="edit" defaultValue={value} />
    }
    return null
}

export default NewTaskForm