function AddTodo({ onSubmit, disabled }) {
  let submitText = disabled ? "sent..." : "add...";
  return (
    <section className="mt-4">
      <form onSubmit={onSubmit} className="flex  justify-between gap-2">
        <input type="text" name="title" placeholder="add a new task" required />
        <input type="submit" value={submitText} disabled={disabled} />
      </form>
    </section>
  );
}
export default AddTodo;
