import propTypes from "prop-types"

const TaskFilter = ( {text, selected, onToggleFilter}) => {

    TaskFilter.propTypes = {
        text: propTypes.string.isRequired,
        selected: propTypes.bool.isRequired,
        onToggleFilter: propTypes.func.isRequired
    }

    let classNames = ''
    if (selected) {
        classNames += ' selected'
    }

    TaskFilter.defaultProps = {
        onToggleFilter: () => {},
    }

    return <button className={classNames}
                    onClick={onToggleFilter}>{text}</button>
}

export default TaskFilter