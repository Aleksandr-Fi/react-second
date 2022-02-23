import { Component } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'

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
          createdData: new Date(),
          created: '0 second',
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
          createdData: new Date(),
          created: '0 second',
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
        return {
          footerData: this.changeActiveElement(footerData, id, 'selected'),
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

    this.addTask = (text, min, sec) => {
      const newTask = {
        text: text,
        completed: false,
        editing: false,
        createdData: new Date(),
        created: '0 second',
        id: this.maxId++,
        min: min,
        sec: sec,
        startTimer: false,
        intervalId: false,
      }

      this.setState(({ todoData }) => {
        const newArr = [...todoData, newTask]

        return {
          todoData: newArr,
        }
      })
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData]
      newArr.forEach((item) => {
        item.created = formatDistanceToNowStrict(item.createdData)
      })
      return {
        todoData: newArr,
      }
    })
  }

  createTodoTask(text) {
    return {
      text: text,
      completed: false,
      editing: false,
      createdData: new Date(),
      created: '0 second',
      field: { value: text },
      id: this.maxId++,
      checked: false,
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
    this.setState(({ todoData }) => {
      let oldItem = this.getItem(todoData, id)
      if (!oldItem.min && !oldItem.sec) {
        this.onStop(id)
        return {
          todoData: todoData,
        }
      }
      const { newMin, newSec } = this.timeDown(oldItem.min, oldItem.sec)
      let newData = this.onToggleProperty(todoData, id, 'min', newMin)
      newData = this.onToggleProperty(newData, id, 'sec', newSec)

      return {
        todoData: newData,
      }
    })
  }

  onPlay = (id) => {
    this.setState(({ todoData }) => {
      let oldItem = this.getItem(todoData, id)
      if (oldItem.startTimer || (!oldItem.min && !oldItem.sec)) {
        return null
      }
      let newData = this.onToggleProperty(todoData, id, 'startTimer', true)
      newData = this.onToggleProperty(newData, id, 'intervalId', setInterval(this.timer, 1000, id))
      return {
        todoData: newData,
      }
    })
  }

  onStop = (id) => {
    this.setState(({ todoData }) => {
      let newData = this.getItem(todoData, id)
      clearInterval(newData.intervalId)
      newData = this.onToggleProperty(todoData, id, 'startTimer', false)
      return {
        todoData: newData,
      }
    })
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
