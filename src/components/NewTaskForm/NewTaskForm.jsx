import propTypes from 'prop-types'
import { useState } from 'react'

const NewTaskForm = ({ addTask }) => {
  NewTaskForm.propTypes = {
    addTask: propTypes.func.isRequired,
  }
  const [text, setText] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (text.trim() && min && min.length <= 4 && sec && sec <= 59) {
      addTask(text, min, sec)
    }
    setText('')
    setMin('')
    setSec('')
  }

  return (
    <form className="new-todo-form" onSubmit={(e) => onSubmit(e)}>
      <label className="input-label label-new-todo">
        <input
          className="new-todo"
          tabIndex={0}
          type="text"
          name="text"
          placeholder="Task"
          autoFocus
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </label>
      <label className="input-label label-new-todo-form__timer">
        <input
          className="new-todo-form__timer"
          tabIndex={0}
          type="number"
          name="min"
          placeholder="Min"
          autoFocus
          onChange={(e) => setMin(e.target.value)}
          value={min}
        />
      </label>
      <label className="input-label label-new-todo-form__timer">
        <input
          className="new-todo-form__timer"
          tabIndex={0}
          type="number"
          name="sec"
          placeholder="Sec"
          autoFocus
          onChange={(e) => setSec(e.target.value)}
          value={sec}
        />
      </label>
      <label className="input-label">
        <input className="input-submit-timer" type="submit" hidden />
      </label>
    </form>
  )
}

export default NewTaskForm
