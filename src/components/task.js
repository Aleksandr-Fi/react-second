

const Task = ( {description, created, field} ) => {

    const Field = (field) => {
        if (field.value) {
            console.log(field);
            return <input type="text" className="edit" value={field.value} />
        }
        return null
    }
    return (
      <li className="view">
        <div>
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{description}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        <Field {...field} />
      </li>
    )
}

export default Task