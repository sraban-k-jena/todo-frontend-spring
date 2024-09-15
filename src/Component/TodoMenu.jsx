import { useState } from "react";
import { removeTodos } from "../Service/TodoService";

function TodoMenu({ filterTodos, fetchTodos }) {
  let [selectedMenu, setSelectedMenu] = useState("ALL");
  return (
    <section className="mt-4 flex justify-between">
      <div className="flex gap-2">
        <button
          className={`${selectedMenu == "ALL" ? "text-blue-500" : ""}`}
          onClick={() => {
            filterTodos("ALL");
            setSelectedMenu("ALL");
          }}
        >
          All
        </button>
        <button
          className={`${selectedMenu == "PENDING" ? "text-blue-500" : ""}`}
          onClick={() => {
            filterTodos("PENDING");
            setSelectedMenu("PENDING");
          }}
        >
          Pending
        </button>
        <button
          className={`${selectedMenu == "COMPLETED" ? "text-blue-500" : ""}`}
          onClick={() => {
            filterTodos("COMPLETED");
            setSelectedMenu("COMPLETED");
          }}
        >
          Completed
        </button>
      </div>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded"
        onClick={() => {
          removeTodos(), fetchTodos();
        }}
      >
        Clear All
      </button>
    </section>
  );
}
export default TodoMenu;
