import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TaskList from "./components/task-list";
import Footer from "./components/footer";

const el = (
  <section className="todoapp">
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus />
    </header>
    <section className="main">
      <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Completed task</span>
                <span className="created"> created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
          <li className="editing">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Editing task</span>
                <span className="created"> created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" value="Editing task" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Active task</span>
                <span className="created"> created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
      </ul>
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <ul className="filters">
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  </section>
)

// ReactDOM.render(el,
//   document.getElementById('root')
// );

const App = () => {

  const todoData = [
    {id: 1, description: 'Completed task', created: ' created 17 seconds ago'},
    {id: 2, description: 'Editing task', created: ' created 5 minutes ago', field: {value: 'Editing task'}},
    {id: 3, description: 'Active task', created: ' created 5 minutes ago'},
  ]

  const footerData = [
    {id: 1, text: 'All', className: 'selected'},
    {id: 2, text: 'Active'},
    {id: 3, text: 'Completed'},
  ]

  return (
    <section className="todoapp">
      <AppHeader />
      <section className="main">
        <TaskList todos={todoData} />
        <Footer filters={footerData} />
      </section>
    </section>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);