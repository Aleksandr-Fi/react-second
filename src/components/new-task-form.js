import { Component } from "react"
import propTypes from "prop-types"

class NewTaskForm extends Component {

    static propTypes = {
        value: propTypes.string.isRequired,
        onChangeForm: propTypes.func.isRequired
    }

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