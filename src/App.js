import { useState } from "react";
import "./App.css";
import AddTask from "./conponents/AddTask";
import Header from "./conponents/Header";
import Tasks from "./conponents/Tasks";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "Meeting 1",
      time: "Feb 5th at 10:30 PM",
      reminder: true,
    },
    {
      id: "2",
      name: "Meeting 2",
      time: "Feb 6th at 2:30 PM",
      reminder: true,
    },
    {
      id: "3",
      name: "Meeting 3",
      time: "Feb 5th at 08:30 AM",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const obj = {
      id:
        tasks.length > 0
          ? (parseInt(tasks[tasks.length - 1].id) + 1).toString()
          : "1",
      name: task.text,
      time: task.date,
      reminder: task.reminder,
    };
    setTasks([...tasks, obj]);
    setShowAddTask(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        <h2>No Tasks</h2>
      )}
    </div>
  );
}

Header.defaultProps = {
  title: "TASK TRACKER",
};

export default App;
