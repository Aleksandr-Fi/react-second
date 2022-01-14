

const NewTaskForm = ( {field = false} ) => {
    if (field.value) {
        return <input type="text" className="edit" value={field.value} />
    }
    return null
}

export default NewTaskForm