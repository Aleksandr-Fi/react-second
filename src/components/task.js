import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import NewTaskForm from './new-task-form';

function Task(props) {
  const {
    completed, editing, text, created,
    onDestroy, onEditing, onCompleted, onChangeForm,
  } = props;

  let classNames = '';
  if (completed) {
    classNames += ' completed';
  }
  if (editing) {
    classNames += ' editing';
  }

  Task.defaultProps = {
    onDestroy: () => {},
    onEditing: () => {},
    onCompleted: () => {},
    onChangeForm: () => {},
  };

  return (
    <li className={classNames}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={onCompleted}
        />
        <label>
          <span className="description">{text}</span>
          <span className="created">{`created ${formatDistanceToNowStrict(created)} ago`}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={onEditing}
        />
        <button
          className="icon icon-destroy"
          onClick={onDestroy}
        />
      </div>
      <NewTaskForm
        value={text}
        onChangeForm={(text) => onChangeForm(text)}
      />
    </li>
  );
}

export default Task;
