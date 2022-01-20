import { Component } from "react"


class NewTaskForm extends Component {

    state = {
    text: ''
    }

    onChengeText = (e) => {
        this.setState({
        text: e.target.value
        })
    }

    onSubmit = (e) => {
        // e.preventDefault()
        // this.props.addTask(this.state.text)
        console.log(this.state.text);
        this.setState({
        text: ''
        })
    }

    render() {
        const {value} = this.props

        return (
            <form className=""
                    onSubmit={this.onSubmit}>
                <input type="text" 
                    className="edit" 
                    defaultValue={value}
                    onChange={this.onChengeText} />
            </form>
        
        )
    }
    
}

export default NewTaskForm