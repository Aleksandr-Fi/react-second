import React, { Component } from "react";
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TaskList from "./components/task-list";
import Footer from "./components/footer";

import './style.css'

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
            <span className="created">created 17 seconds ago</span>
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
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        <input type="text" className="edit" defaultValue="Editing task" />
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">Active task</span>
            <span className="created">created 5 minutes ago</span>
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

class App extends Component {

  state = {
    todoData: [
      {id: 1, className: 'completed', description: 'Completed task', created: ' created 17 seconds ago'},
      {id: 2, className: 'editing', description: 'Editing task', created: ' created 5 minutes ago', field: {value: 'Editing task'}},
      {id: 3, description: 'Active task', created: ' created 5 minutes ago'},
    ],

    footerData: [
      {id: 1, text: 'All', className: 'selected'},
      {id: 2, text: 'Active'},
      {id: 3, text: 'Completed'},
    ]
  }

  destroyTask = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ]

      return {
        todoData: newArray
      }
    })
  }

  render() {
    return (
      <section className="todoapp">
        <AppHeader />
        <section className="main">
          <TaskList 
            todos={this.state.todoData}
            onDestroy= { this.destroyTask } />
          <Footer filters={this.state.footerData} />
        </section>
      </section>
    )
  }

  
}

ReactDOM.render(<App />,
  document.getElementById('root')
);

// ReactDOM.render((
//   <div>
//     {el}
//     <App />
//   </div>),
//   document.getElementById('root')
// );