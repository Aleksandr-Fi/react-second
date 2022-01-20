import React, { Component } from "react";
import AppHeader from './app-header';
import TaskList from "./task-list";
import Footer from "./footer";

export default class App extends Component {

    maxId = 100

    state = {
        todoData: [
            {id: 1, completed: false, editing: false, text: 'Completed task', created: ' created 17 seconds ago'},
            {id: 2, completed: false, editing: true, text: 'Editing task', created: ' created 5 minutes ago'},
            this.createTodoTask('Completed task'),
            this.createTodoTask('Editing task'),
            this.createTodoTask('Active task'),
        ],

        footerData: [
            {id: 1, text: 'All', selected: true},
            {id: 2, text: 'Active', selected: false},
            {id: 3, text: 'Completed', selected: false},
        ]
    }

    createTodoTask(text) {
        return {
            text: text,
            completed: false,
            editing: false,
            created: ' created 7 minutes ago',
            field: {value: text},
            id: this.maxId++
        }
    }

    onToggleProperty(arr, id, propName, propValue) {
        const idx = arr.findIndex((el) => el.id === id)

        const oldItem = arr[idx]
        let newValue = propValue ? propValue : !oldItem[propName]
        console.log(`${propName}: ${newValue}`);
        const newItem = {...oldItem,
            [propName]: newValue}

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleCompleted = (id) => {
        this.setState(({ todoData }) => {
            
            return {
                todoData: this.onToggleProperty(todoData, id, 'completed')
            }
        })
    }

    onToggleEditing = (id) => {
        this.setState(({ todoData }) => {
            
            return {
                todoData: this.onToggleProperty(todoData, id, 'editing')
            }
        })
    }

    onChangeTask = (text, id) => {
        this.setState(({ todoData }) => {
            
            return {
                todoData: this.onToggleProperty(todoData, id, 'editing', text)
            }
        })
    }

    onToggleFilter = (id) => {
        this.setState(({ footerData }) => {
            const newArray = footerData.map((el) => {
                if (el.id ===id) {
                    return {...el, selected: true}
                } else {
                    return {...el, selected: false}
                }
            })

            return {
                footerData: newArray
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

    onClearCompleted = () => {
        this.setState(({ todoData }) => {
            console.log(todoData);
            const newArray = todoData.filter((el) => !el.completed)
            console.log(newArray);

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
            <AppHeader
                    addTask={this.addTask} />
            <section className="main">
                <TaskList 
                    filters={footerData}
                    todos={todoData}
                    onDestroy= {this.destroyTask}
                    onEditing={this.onToggleEditing}
                    onCompleted={this.onToggleCompleted}
                    onChangeTask={this.onChangeTask} />
                <Footer
                    filters={footerData}
                    todos={todoData}
                    onToggleFilter={this.onToggleFilter}
                    onClearCompleted={this.onClearCompleted} />
            </section>
            </section>
        )
    }
}