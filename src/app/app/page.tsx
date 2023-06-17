import { Metadata } from "next";
import styles from "./page.module.css";
import { db } from "../../../lib/db";

export const metadata: Metadata = {
  title: "Your Todo List | tudox",
  description: "tudox - focus on simplicity",
};

// Database functions
async function getTasks(userId: string) {
  const tasks = await db.task.findMany({
    where: {
      userId: userId,
    },
  });

  return tasks;
}

export default async function App() {
  let user = await db.user.findMany({
    where: {
      name: "Tushar Gaurav",
    },
  });

  let tasks = await getTasks(user[0].id);
  let monday_tasks = tasks.filter((task) => task.weekday === "Monday");
  let tuesday_tasks = tasks.filter((task) => task.weekday === "Tuesday");
  let wedneusday_tasks = tasks.filter((task) => task.weekday === "Wednesday");
  let thrusday_tasks = tasks.filter((task) => task.weekday === "Thursday");
  let friday_tasks = tasks.filter((task) => task.weekday === "Friday");
  let saturday_tasks = tasks.filter((task) => task.weekday === "Saturday");
  let sunday_tasks = tasks.filter((task) => task.weekday === "Sunday");

  return (
    <div className="container">
      <div className={styles.week_view}>
        <div className={styles.weekday}>
          <h1>Monday</h1>
          <div>
            <ul>
              {monday_tasks.map((task) => {
                return <li key={task.id}>{task.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Tuesday</h1>
          <div>
            <ul>
              {tuesday_tasks.map((task) => {
                return <li key={task.id}>{task.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Wedneusday</h1>
          <div>
            <ul>
              {wedneusday_tasks.map((task) => {
                return <li key={task.id}>{task.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Thrusday</h1>
          <div>
            <ul>
              {thrusday_tasks.map((task) => {
                return <li key={task.id}>{task.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Friday</h1>
          <div>
            <ul>
              {friday_tasks.map((task) => {
                return <li key={task.id}>{task.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Saturday</h1>
          <div>
            <ul>
              {saturday_tasks.map((task) => {
                return <li key={task.id}>{task.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Sunday</h1>
          <div>
            <ul>
              {sunday_tasks.map((task) => {
                return <li key={task.id}>{task.title}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* <h1>Your Todolist:</h1>
      <div>
        <input type="text" />
        day:
        <select>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wedneusday</option>
          <option>Thrusday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
        <button>Add</button>
      </div> */}
    </div>
  );
}
