import React, { Component } from "react";
import AppHeader from './app-header';
import TaskList from "./task-list";
import Footer from "./footer";

export default class App extends Component {

    state = {
        todoData: [
            {id: 1, completed: true, editing: false, description: 'Completed task', created: ' created 17 seconds ago'},
            {id: 2, completed: false, editing: true, description: 'Editing task', created: ' created 5 minutes ago', field: {value: 'Editing task'}},
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