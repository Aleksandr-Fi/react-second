import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TaskList from "./components/task-list";
import Footer from "./components/footer";

import './style.css'

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