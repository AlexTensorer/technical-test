import React, { useState } from "react";
import { useEffect } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleTaskChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const confirm = window.confirm("Are you sure ?");
    if (!confirm) return;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
    <div>
      <h2 className="text-[22px] font-semibold mb-4">To be completed by end of week</h2>
      <div className="flex gap-2 mb-4">
      <textarea
      id="text"
      rows="1"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      class="p-2.5 w-full rounded-md border border-gray-300"
      placeholder="Add a new task">
        </textarea>
        <button onClick={handleAddTask} className="bg-[#0560FD] text-white px-2 py-1 rounded-md">
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskChange(index)}
              className="mr-2"
            />
            <span className={task.completed ? "line-through" : ""}>{task.text}</span>
            <button onClick={() => handleRemoveTask(index)} className="ml-2 text-[#F43F5E]">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
