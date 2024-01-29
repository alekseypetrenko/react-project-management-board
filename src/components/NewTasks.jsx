import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-cente gap-4r">
      <input
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950 ml-4"
      >
        Add task
      </button>
    </div>
  );
}
