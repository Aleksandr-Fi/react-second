import { Component } from 'react'
import propTypes from 'prop-types'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.propTypes = {
      value: propTypes.string.isRequired,
      onChangeForm: propTypes.func.isRequired,
    }
    this.state = {
      text: this.props.value,
    }
    this.onChangeText = (e) => {
      this.setState({
        text: e.target.value,
      })
    }

    this.onSubmit = (e) => {
      e.preventDefault()
      this.props.onChangeForm(this.state.text)
    }
  }

  render() {
    const { value } = this.props

    return (
      <form className="" onSubmit={this.onSubmit}>
        <input type="text" className="edit" defaultValue={value} onChange={this.onChangeText} />
      </form>
    )
  }
}

export default NewTaskForm
