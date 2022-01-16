import React, { Component } from "react";
import AppHeader from './app-header';
import TaskList from "./task-list";
import Footer from "./footer";

export default class App extends Component {

    maxId = 100

    state = {
        todoData: [
            {id: 1, completed: true, editing: false, text: 'Completed task', created: ' created 17 seconds ago'},
            {id: 2, completed: false, editing: true, text: 'Editing task', created: ' created 5 minutes ago', field: {value: 'Editing task'}},
            {id: 3, text: 'Active task', created: ' created 5 minutes ago'},
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

    addTask = (text) => {
        const newTask = {
            text: text,
            completed: true,
            editing: false,
            created: ' created 17 minutes ago',
            id: this.maxId++
        }

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newTask
            ]

            return {
                todoData: newArr
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