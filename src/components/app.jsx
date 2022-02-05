import { Component } from 'react'

import AppHeader from './AppHeader'
import TaskList from './TaskList'
import Footer from './Footer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.maxId = 100
    this.state = {
      todoData: [
        {
          id: 1,
          completed: true,
          editing: false,
          text: 'Completed task',
          created: new Date(),
          checked: true,
        },
        {
          id: 2,
          completed: false,
          editing: true,
          text: 'Editing task',
          created: new Date(),
          checked: false,
        },
        this.createTodoTask('Active task'),
      ],

      footerData: [
        { id: 1, text: 'All', selected: true },
        { id: 2, text: 'Active', selected: false },
        { id: 3, text: 'Completed', selected: false },
      ],
    }
    this.onToggleCompleted = (id) => {
      this.setState(({ todoData }) => {
        let newData = this.onToggleProperty(todoData, id, 'completed')
        newData = this.onToggleProperty(newData, id, 'checked')
        return {
          todoData: newData,
        }
      })
    }

    this.onToggleEditing = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.onToggleProperty(todoData, id, 'editing'),
        }
      })
    }

    this.onChangeTask = (text, id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.onToggleProperty(todoData, id, 'text', text),
        }
      })
      this.onToggleEditing(id)
    }

    this.onToggleFilter = (id) => {
      this.setState(({ footerData }) => {
        const newArray = footerData.map((el) => {
          if (el.id === id) {
            return { ...el, selected: true }
          } else {
            return { ...el, selected: false }
          }
        })

        return {
          footerData: newArray,
        }
      })
    }

    this.destroyTask = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id)

        const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

        return {
          todoData: newArray,
        }
      })
    }

    this.onClearCompleted = () => {
      this.setState(({ todoData }) => {
        const newArray = todoData.filter((el) => !el.completed)

        return {
          todoData: newArray,
        }
      })
    }

    this.addTask = (text) => {
      const newTask = {
        text: text,
        completed: false,
        editing: false,
        created: new Date(),
        id: this.maxId++,
      }

      this.setState(({ todoData }) => {
        const newArr = [...todoData, newTask]

        return {
          todoData: newArr,
        }
      })
    }
  }

  createTodoTask(text) {
    return {
      text: text,
      completed: false,
      editing: false,
      created: new Date(),
      field: { value: text },
      id: this.maxId++,
      checked: false,
    }
  }

  onToggleProperty(arr, id, propName, propValue) {
    const idx = arr.findIndex((el) => el.id === id)

    const oldItem = arr[idx]
    let newValue = propValue ? propValue : !oldItem[propName]
    const newItem = { ...oldItem, [propName]: newValue }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  render() {
    const { todoData, footerData } = this.state

    return (
      <section className="todoapp">
        <AppHeader addTask={this.addTask} />
        <section className="main">
          <TaskList
            filters={footerData}
            todos={todoData}
            onDestroy={this.destroyTask}
            onEditing={this.onToggleEditing}
            onCompleted={this.onToggleCompleted}
            onChangeTask={this.onChangeTask}
          />
          <Footer
            filters={footerData}
            todos={todoData}
            onToggleFilter={this.onToggleFilter}
            onClearCompleted={this.onClearCompleted}
          />
        </section>
      </section>
    )
  }
}
