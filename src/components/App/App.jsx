import { Component } from 'react'

import AppHeader from '../AppHeader/AppHeader'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.maxId = 4
    this.state = {
      todoData: [
        {
          id: 1,
          completed: true,
          editing: false,
          text: 'fw',
          created: new Date(),
          checked: true,
          min: 12,
          sec: 25,
          startTimer: false,
          intervalId: false,
        },
        {
          id: 2,
          completed: false,
          editing: true,
          text: 'Editing task',
          created: new Date(),
          checked: false,
          min: 12,
          sec: 25,
          startTimer: false,
          intervalId: false,
        },
        this.createTodoTask('fw'),
      ],

      footerData: [
        { id: 1, text: 'All', selected: true },
        { id: 2, text: 'Active', selected: false },
        { id: 3, text: 'Completed', selected: false },
      ],
    }
    this.onToggleCompleted = (id) => {
      let newData = this.onToggleProperty(this.state.todoData, id, 'completed')
      newData = this.onToggleProperty(newData, id, 'checked')
      this.setState({ todoData: newData })
    }

    this.onToggleEditing = (id) => {
      let newData = this.onToggleProperty(this.state.todoData, id, 'editing')
      this.setState({ todoData: newData })
    }

    this.onChangeTask = (text, id) => {
      // change the content of the task
      let newData = this.onToggleProperty(this.state.todoData, id, 'text', text)
      this.setState({ todoData: newData })
      // cancel editing
      this.onToggleEditing(id)
    }

    this.onToggleFilter = (id) => {
      let newData = this.changeActiveElement(this.state.footerData, id, 'selected')
      this.setState({ footerData: newData })
    }

    this.destroyTask = (id) => {
      let newData = this.state.todoData
      const idx = newData.findIndex((el) => el.id === id)
      newData = [...newData.slice(0, idx), ...newData.slice(idx + 1)]
      this.setState({ todoData: newData })
    }

    this.onClearCompleted = () => {
      const newData = this.state.todoData.filter((el) => !el.completed)
      this.setState({ todoData: newData })
    }

    this.addTask = (text, min, sec) => {
      const newTask = {
        text: text,
        completed: false,
        editing: false,
        created: new Date(),
        checked: false,
        id: this.maxId++,
        min: min,
        sec: sec,
        startTimer: false,
        intervalId: false,
      }
      let newData = this.state.todoData
      newData = [...newData, newTask]
      this.setState({ todoData: newData })
    }
  }

  createTodoTask(text) {
    return {
      text: text,
      completed: false,
      editing: false,
      created: new Date(),
      checked: false,
      field: { value: text },
      id: this.maxId++,
      min: 12,
      sec: 25,
      startTimer: false,
      intervalId: false,
    }
  }

  onToggleProperty(arr, id, propName, propValue) {
    const idx = arr.findIndex((el) => el.id === id)

    const oldItem = arr[idx]
    let newValue = propValue || propValue === 0 ? propValue : !oldItem[propName]
    const newItem = { ...oldItem, [propName]: newValue }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  getItem(arr, id) {
    const idx = arr.findIndex((el) => el.id === id)
    return arr[idx]
  }

  changeActiveElement(arr, id, propName) {
    return arr.map((el) => {
      if (el.id === id) {
        return { ...el, [propName]: true }
      } else {
        return { ...el, [propName]: false }
      }
    })
  }

  timeDown(min, sec) {
    if (!sec) {
      return { newMin: min - 1, newSec: 59 }
    }
    return { newMin: min, newSec: sec - 1 }
  }

  timer = (id) => {
    let oldItem = this.getItem(this.state.todoData, id)
    if (!oldItem.min && !oldItem.sec) {
      this.onStop(id)
      return
    }
    const { newMin, newSec } = this.timeDown(oldItem.min, oldItem.sec)
    let newData = this.onToggleProperty(this.state.todoData, id, 'min', newMin)
    newData = this.onToggleProperty(newData, id, 'sec', newSec)
    this.setState({ todoData: newData })
  }

  onPlay = (id) => {
    let oldItem = this.getItem(this.state.todoData, id)
    if (oldItem.startTimer || (!oldItem.min && !oldItem.sec)) {
      return
    }
    let newData = this.onToggleProperty(this.state.todoData, id, 'startTimer', true)
    newData = this.onToggleProperty(newData, id, 'intervalId', setInterval(this.timer, 1000, id))
    this.setState({ todoData: newData })
  }

  onStop = (id) => {
    let newItem = this.getItem(this.state.todoData, id)
    clearInterval(newItem.intervalId)
    let newData = this.onToggleProperty(this.state.todoData, id, 'startTimer', false)
    this.setState({ todoData: newData })
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
            onPlay={(id) => this.onPlay(id)}
            onStop={(id) => this.onStop(id)}
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
