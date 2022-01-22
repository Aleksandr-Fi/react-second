import { Component } from "react"


class NewTaskForm extends Component {

    state = {
    text: this.props.value
    }

    onChangeText = (e) => {
        this.setState({
        text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onChangeForm(this.state.text)
    }

    render() {
        const {value} = this.props

        return (
            <form className=""
                    onSubmit={this.onSubmit}>
                <input type="text" 
                    className="edit" 
                    defaultValue={value}
                    onChange={this.onChangeText} />
            </form>
        
        )
    }
    
}

export default NewTaskForm