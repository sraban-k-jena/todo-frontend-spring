let BASE_URL = "http://localhost:1200/todos";

export function getTodos() {
  return fetch(BASE_URL);
}

export function addTodo(payload) {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });
}
export function updateTodoState(id, state) {
  let url = `${BASE_URL}/${id}/state/${state}`;
  return fetch(url, { method: "PATCH" });
}

export function removeTodos() {
  return fetch(BASE_URL + "/all", { method: "DELETE" });
}
