import "./styles.css";
import { useState } from "react";
import { Task } from "./Task";
export default function App() {
  {
    /* All the Tasks are stored in array */
  }
  const [todoList, setTodoList] = useState([]);
  {
    /* Task Format */
  }
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    // setTodoList([...todoList, newTask]);
    {
      /*It deletes all tasks with similar names*/
    }
  };

  const deleteTask = (id) => {
    // const newTodoList = todoList.filter((task) => {
    //   return task !== taskName
    //   // if (task === taskName )
    //   // {
    //   //   return false;
    //   // } else {
    //   //   return true;
    //   // }
    // })

    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleInputChange} />
        <button onClick={addTask}> Add Task </button>
      </div>
      {todoList.length ? (
        <h1>List of Tasks </h1>
      ) : (
        <h1>No Tasks are in the list</h1>
      )}
      {todoList.map((task) => {
        return (
          <Task
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
          // <div>
          //   <h1>{props.taskName} {props.id}</h1>
          //   <button onClick={() => deleteTask(task.id)}> X </button>
          // </div>
        );
      })}
    </div>
  );
}
