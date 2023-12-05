import React, { useState, useEffect } from "react";

// {
//   name: string,
//   done: false
// }

export default function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [notify, setNotify] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const newTodo = localStorage.getItem("todo");
    if (newTodo) {
      setTodo(JSON.parse(newTodo));
    }
  }, []);

  useEffect(() => {
    console.log("Esto solo se ejecuta cuando el estado todo cambia");
  }, [todo]);

  const handleAddTask = () => {
    if (task.trim() === "") {
      setNotify(true);
      setTask("");
      return;
    }

    const newTodo = [
      ...todo,
      {
        name: task,
        done: false,
      },
    ];

    setTodo(newTodo);
    setTask("");

    localStorage.setItem("todo", JSON.stringify(newTodo));
  };

  const handleChangeTask = (e) => {
    setNotify(false);
    setTask(e.target.value);
    if (e.target.value.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleMarkDoneTask = (index) => {
    const updatedTodoList = todo.map((element, idx) => {
      if (idx === index) {
        return {
          ...element,
          done: true,
        };
      } else {
        return element;
      }
    });

    setTodo(updatedTodoList);
    localStorage.setItem("todo", JSON.stringify(updatedTodoList));
  };

  const handleRemoveTask = (index) => {
    const newTodo = todo.filter((element, idx) => idx !== index);
    setTodo(newTodo);
  };

  // JSX
  return (
    <div>
      <h2>TODO LIST</h2>
      <ul>
        {todo.map((element, index) => {
          return element.done === false ? (
            <li key={index}>
              {element.name}{" "}
              <button onClick={() => handleMarkDoneTask(index)}>✔️</button>{" "}
              <button onClick={() => handleRemoveTask(index)}>❌</button>
            </li>
          ) : null;
        })}
      </ul>
      <div>
        <input value={task} type="text" onChange={(e) => handleChangeTask(e)} />
        <button disabled={disabled} onClick={handleAddTask}>
          Crear Tarea
        </button>
        {notify === true ? (
          <p
            style={{
              color: "red",
              border: "1px dotted red",
              padding: "0.5em 1em",
            }}
          >
            Necesitas agregar algo de texto para guardar una tarea.
          </p>
        ) : null}
      </div>

      <ul>
        {todo.map((element, index) => {
          return element.done === true ? (
            <li key={index}>{element.name}</li>
          ) : null;
        })}
      </ul>
    </div>
  );
}
