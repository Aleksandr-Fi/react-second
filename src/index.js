import React from "react";
import ReactDOM from 'react-dom';

const el = (
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
)

const AppHeader = () => {
  return (
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus />
    </header>
  )
}

const Task = (description, created) => {
  return (
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label>
        <span class="description">Completed task</span>
        <span class="created">created 17 seconds ago</span>
      </label>
      <button class="icon icon-edit"></button>
      <button class="icon icon-destroy"></button>
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