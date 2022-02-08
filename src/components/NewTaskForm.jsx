import { Component } from 'react'
import propTypes from 'prop-types'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
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
  static propTypes = {
    value: propTypes.string.isRequired,
    onChangeForm: propTypes.func.isRequired,
  }

  render() {
    const { value } = this.props

    return (
      <form onSubmit={this.onSubmit}>
        <label className="input-label">
          <input type="text" className="edit" defaultValue={value} onChange={this.onChangeText} />
        </label>
      </form>
    )
  }
}

export default NewTaskForm
