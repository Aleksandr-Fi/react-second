import { Component } from 'react';

class AppHeader extends Component {
  state = {
    text: '',
  };

  onChangeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form
          className=""
          onSubmit={this.onSubmit}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onChangeText}
            value={this.state.text}
          />
        </form>
      </header>
    );
  }
}

export default AppHeader;
