function TaskFilter({ text, selected, onToggleFilter }) {
  let classNames = '';
  if (selected) {
    classNames += ' selected';
  }

  TaskFilter.defaultProps = {
    onToggleFilter: () => {},
  };

  return (
    <button
      className={classNames}
      onClick={onToggleFilter}
    >
      {text}
    </button>
  );
}

export default TaskFilter;
