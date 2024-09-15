import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./Component/AddTodo";
import Todos from "./Component/Todos";
import TodoMenu from "./Component/TodoMenu";
import { addTodo, getTodos } from "./Service/TodoService";
function App() {
  const [disabled, setDisabled] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [copyTodos, setCopyTodos] = useState([]);

  async function fetchTodos() {
    try {
      const response = await getTodos();
      const todos = await response.json();
      console.log(todos);
      setTodos(todos);
      setCopyTodos(todos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function submitForm(event) {
    setDisabled((state) => true);
    event.preventDefault();
    let form = event.target;
    let inputs = form.elements;

    let obj = {};
    Array.from(inputs).forEach((input) => {
      if (input.type !== "submit") {
        obj[input.name] = input.value;
      }
    });

    try {
      let response = await addTodo(obj);

      if (response.status === 201) {
        let data = await response.json();
        fetchTodos();
        form.reset();
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDisabled(false);
    }
  }
  function filterTodos(state) {
    if (state == "ALL") {
      setCopyTodos(allTodos);
    } else if (state === "PENDING") {
      setCopyTodos(allTodos.filter((todo) => !todo.completed));
    } else {
      setCopyTodos(allTodos.filter((todo) => todo.completed));
    }
  }
  return (
    <main>
      <div className="bg-white p-4 rounded-md shadow-lg w-96">
        <h2 className="text-center text-xl">Todo App </h2>
        <AddTodo onSubmit={submitForm} disabled={disabled} />
        <TodoMenu filterTodos={filterTodos} fetchTodos={fetchTodos} />
        <hr />
        <Todos todos={copyTodos} fetchTodos={fetchTodos} />
      </div>
    </main>
  );
}

export default App;
