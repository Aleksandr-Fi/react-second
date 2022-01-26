import { Component } from "react";
import propTypes from "prop-types";

class AppHeader extends Component {

  static propTypes = {
    addTask: propTypes.func.isRequired
  }

  state = {
    text: ''
  }

    onChangeText = (e) => {
      this.setState({
        text: e.target.value
      })
    }

    onSubmit = (e) => {
      e.preventDefault()
      this.props.addTask(this.state.text)
      this.setState({
        text: ''
      })
    }

    render() {
        return (
        <header className="header">
          <h1>todos</h1>
          <form className=""
                onSubmit={this.onSubmit}>
            <input className="new-todo" 
                placeholder="What needs to be done?" 
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onChange={this.onChangeText}
                value={this.state.text} />
          </form>        
        </header>
      )
    }
    
}

export default AppHeader