import { Component } from 'react'

import AppHeader from '../AppHeader/AppHeader'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'

export default class App extends Component {
  maxId = 4

  state = {
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
      {
        id: 3,
        completed: false,
        editing: false,
        text: 'fw',
        created: new Date(),
        checked: false,
        min: 12,
        sec: 25,
        startTimer: false,
        intervalId: false,
      },
    ],

    footerData: [
      { id: 1, text: 'All', selected: true },
      { id: 2, text: 'Active', selected: false },
      { id: 3, text: 'Completed', selected: false },
    ],
  }

  onToggleCompleted = (id) => {
    let newData = this.onToggleProperty(this.state.todoData, id, 'completed')
    newData = this.onToggleProperty(newData, id, 'checked')
    this.setState({ todoData: newData })
  }

  onToggleEditing = (id) => {
    let newData = this.onToggleProperty(this.state.todoData, id, 'editing')
    this.setState({ todoData: newData })
  }

  onChangeTask = (text, id) => {
    // change the content of the task
    let newData = this.onToggleProperty(this.state.todoData, id, 'text', text)
    this.setState({ todoData: newData })
    // cancel editing
    this.onToggleEditing(id)
  }

  onToggleFilter = (id) => {
    let newData = this.changeActiveElement(this.state.footerData, id, 'selected')
    this.setState({ footerData: newData })
  }

  destroyTask = (id) => {
    this.onStop(id)
    let newData = this.state.todoData
    const idx = newData.findIndex((el) => el.id === id)
    newData = [...newData.slice(0, idx), ...newData.slice(idx + 1)]
    this.setState({ todoData: newData })
  }

  onClearCompleted = () => {
    this.state.todoData.forEach((el) => el.completed && this.onStop(el.id))
    const newData = this.state.todoData.filter((el) => !el.completed)
    this.setState({ todoData: newData })
  }

  addTask = (text, min, sec) => {
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

  onToggleProperty = (arr, id, propName, propValue) => {
    const idx = arr.findIndex((el) => el.id === id)

    const oldItem = arr[idx]
    let newValue = propValue || propValue === 0 ? propValue : !oldItem[propName]
    const newItem = { ...oldItem, [propName]: newValue }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  getItem = (arr, id) => {
    const idx = arr.findIndex((el) => el.id === id)
    return arr[idx]
  }

  changeActiveElement = (arr, id, propName) => {
    return arr.map((el) => {
      if (el.id === id) {
        return { ...el, [propName]: true }
      } else {
        return { ...el, [propName]: false }
      }
    })
  }

  timeDown = (min, sec) => {
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
            onPlay={this.onPlay}
            onStop={this.onStop}
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
