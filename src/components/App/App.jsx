import { useState } from 'react'

import AppHeader from '../AppHeader/AppHeader'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'

const App = () => {
  let maxId = 4

  const [todoData, setTodoData] = useState([
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
  ])

  const [footerData, setFooterData] = useState([
    { id: 1, text: 'All', selected: true },
    { id: 2, text: 'Active', selected: false },
    { id: 3, text: 'Completed', selected: false },
  ])

  const onToggleCompleted = (id) => {
    let newData = onToggleProperty(todoData, id, 'completed')
    newData = onToggleProperty(newData, id, 'checked')
    setTodoData(newData)
  }

  const onToggleEditing = (id) => {
    let newData = onToggleProperty(todoData, id, 'editing')
    setTodoData(newData)
  }

  const onChangeTask = (text, id) => {
    // change the content of the task
    let newData = onToggleProperty(todoData, id, 'text', text)
    setTodoData(newData)
    // cancel editing
    onToggleEditing(id)
  }

  const onToggleFilter = (id) => {
    let newData = changeActiveElement(footerData, id, 'selected')
    setFooterData(newData)
  }

  const destroyTask = (id) => {
    onStop(id)
    let newData = todoData
    const idx = newData.findIndex((el) => el.id === id)
    newData = [...newData.slice(0, idx), ...newData.slice(idx + 1)]
    setTodoData(newData)
  }

  const onClearCompleted = () => {
    todoData.forEach((el) => el.completed && onStop(el.id))
    const newData = todoData.filter((el) => !el.completed)
    setTodoData(newData)
  }

  const addTask = (text, min, sec) => {
    const newTask = {
      text: text,
      completed: false,
      editing: false,
      created: new Date(),
      checked: false,
      id: maxId++,
      min: min,
      sec: sec,
      startTimer: false,
      intervalId: false,
    }
    let newData = todoData
    newData = [...newData, newTask]
    setTodoData(newData)
  }

  const onToggleProperty = (arr, id, propName, propValue) => {
    const idx = arr.findIndex((el) => el.id === id)

    const oldItem = arr[idx]
    let newValue = propValue || propValue === 0 ? propValue : !oldItem[propName]
    const newItem = { ...oldItem, [propName]: newValue }
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  const getItem = (arr, id) => {
    const idx = arr.findIndex((el) => el.id === id)
    return arr[idx]
  }

  const changeActiveElement = (arr, id, propName) => {
    return arr.map((el) => {
      if (el.id === id) {
        return { ...el, [propName]: true }
      } else {
        return { ...el, [propName]: false }
      }
    })
  }

  const [intervalTimers, setIntervalTimers] = useState(new Map())

  const timeDown = (min, sec) => {
    if (!sec) {
      return { newMin: min - 1, newSec: 59 }
    }
    return { newMin: min, newSec: sec - 1 }
  }

  const timer = (id) => {
    let oldItem = getItem(todoData, id)
    if (!oldItem.min && !oldItem.sec) {
      onStop(id)
      return
    }
    const { newMin, newSec } = timeDown(oldItem.min, oldItem.sec)
    oldItem.min = newMin
    oldItem.sec = newSec
    setTodoData((todoData) => {
      let newData = onToggleProperty(todoData, id, 'min', newMin)
      return onToggleProperty(newData, id, 'sec', newSec)
    })
  }

  const onPlay = (id) => {
    let oldItem = getItem(todoData, id)
    if (oldItem.startTimer || (!oldItem.min && !oldItem.sec)) {
      return
    }
    let newData = onToggleProperty(todoData, id, 'startTimer', true)
    setIntervalTimers(intervalTimers.set(id, setInterval(timer, 1000, id)))
    setTodoData(newData)
  }

  const onStop = (id) => {
    clearInterval(intervalTimers.get(id))
    let newData = onToggleProperty(todoData, id, 'startTimer', false)
    setTodoData(newData)
  }

  return (
    <section className="todoapp">
      <AppHeader addTask={addTask} />
      <section className="main">
        <TaskList
          filters={footerData}
          todos={todoData}
          onDestroy={destroyTask}
          onEditing={onToggleEditing}
          onCompleted={onToggleCompleted}
          onChangeTask={onChangeTask}
          onPlay={onPlay}
          onStop={onStop}
        />
        <Footer
          filters={footerData}
          todos={todoData}
          onToggleFilter={onToggleFilter}
          onClearCompleted={onClearCompleted}
        />
      </section>
    </section>
  )
}

export default App
