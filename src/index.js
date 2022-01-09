import React from "react";
import ReactDOM from 'react-dom';

const el = (
  <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
)

const AppHeader = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autofocus />
    </header>
  )
}

const Task = (description, created) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description">Completed task</span>
        <span className="created">created 17 seconds ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  )
}

const NewTaskForm = () => {

}

const Footer = () => {

}

const TasksFilter = () => {

}

ReactDOM.render(el,
  document.getElementById('root')
);