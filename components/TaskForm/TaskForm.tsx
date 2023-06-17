"use client";
import "./styles.css";

export default function TaskForm() {
  function showOptions() {
    console.log("showing options");
    let additionalOptions = document.getElementById("additional-options");
    additionalOptions.classList.remove("hidden");
    let additionalOptionsToggle = document.getElementById(
      "additional-options-toggle"
    );
    additionalOptionsToggle.classList.add("hidden");
  }

  return (
    <div className="add-task-form">
      <h2>Add Task</h2>
      <form id="task-form">
        <div className="form-group">
          <label htmlFor="task-name">Task Name:</label>
          <input type="text" id="task-name" name="taskName" required />
        </div>
        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <select id="day" name="day" required>
            <option value="" disabled selected>
              Select a day
            </option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Thrusday">Thrusday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="button"
            id="additional-options-toggle"
            onClick={showOptions}
          >
            Additional Options
          </button>
          <div id="additional-options" className="hidden">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="3"></textarea>
            <div className="reminder">
              <input type="checkbox" id="set-reminder" name="setReminder" />
              <label htmlFor="set-reminder">Set Reminder</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
}
