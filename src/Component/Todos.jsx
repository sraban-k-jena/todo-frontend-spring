import { updateTodoState } from "../Service/TodoService";

function Todos({ todos, fetchTodos }) {
  async function completeStateChange(id, state) {
    try {
      let response = await updateTodoState(id, state);
      if (response.status === 200) {
        fetchTodos();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="mt-4 max-h-20 overflow-y-auto">
      {todos.map((todo) => (
        <div className="flex gap-4 items-center" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeStateChange(todo.id, !todo.completed)}
          />
          <p className="text-purple-600">{todo.title}</p>
        </div>
      ))}
    </section>
  );
}
export default Todos;
