import NewTaskForm from "./new-task-form";

const Task = ( {description, created, field} ) => {

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
        <NewTaskForm {...field} />
      </li>
    )
}

export default Task