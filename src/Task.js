import "./styles.css";

export const Task = (props) => {
  return (
    <div
      className="Task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h3>
        {props.id} . {props.taskName}
      </h3>
      <button onClick={() => props.deleteTask(props.id)}> X </button>
      <button onClick={() => props.completeTask(props.id)}> completed </button>
    </div>
  );
};
