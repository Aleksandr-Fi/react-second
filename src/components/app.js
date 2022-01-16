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
            {id: 3, completed: false, editing: false, text: 'Active task', created: ' created 5 minutes ago'},
            this.createTodoTask('Active task'),
        ],

        footerData: [
            {id: 1, text: 'All', selected: true, className: 'selected'},
            {id: 2, text: 'Active', selected: false},
            {id: 3, text: 'Completed', selected: false},
        ]
    }

    createTodoTask(text) {
        return {
            text: text,
            completed: false,
            editing: false,
            created: ' created 17 minutes ago',
            field: {value: text},
            id: this.maxId++
        }
    }

    onToggleCompleted = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const oldItem = todoData[idx]
            const newItem = {...oldItem,
                completed: !oldItem.completed}

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    onToggleEditing = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const oldItem = todoData[idx]
            const newItem = {...oldItem,
                editing: !oldItem.editing}

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
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
            completed: false,
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
        const {todoData, footerData} = this.state

        return (
            <section className="todoapp">
            <AppHeader />
            <section className="main">
                <TaskList 
                    todos={todoData}
                    onDestroy= {this.destroyTask}
                    onEditing={this.onToggleEditing}
                    onCompleted={this.onToggleCompleted} />
                <Footer filters={footerData} todos={todoData} />
            </section>
            </section>
        )
    }
}