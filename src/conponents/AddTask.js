import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please  add task");
      return;
    }
    addTask({ text, date, reminder });
    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label className="form-control label">Task</label>
        <input
          className="form-control input"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label className="form-control label">Add data and time</label>
        <input
          className="form-control input"
          type="text"
          placeholder="Add data and time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>

      <div className="form-control form-control-check">
        <label className="form-control label">Set Reminder</label>
        <input
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          className="form-control input"
          type="checkbox"
        ></input>
      </div>

      <input className="btn btn-block" type="submit" value="Save Task"></input>
    </form>
  );
};

export default AddTask;
