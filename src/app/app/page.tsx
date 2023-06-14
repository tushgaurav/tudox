import styles from "./page.module.css";

export default function App() {
  return (
    <div className="container">
      <div className={styles.week_view}>
        <div className={styles.weekday}>
          <h1>Monday</h1>
          <div>
            <ul>
              <li>Finish building this website.</li>
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Tuesday</h1>
          <div>
            <ul>
              <li>Finish building this website.</li>
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Wedneusday</h1>
          <div>
            <ul>
              <li>Finish building this website.</li>
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Thrusday</h1>
          <div>
            <ul>
              <li>Finish building this website.</li>
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Friday</h1>
          <div>
            <ul>
              <li>Finish building this website.</li>
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Saturday</h1>
          <div>
            <ul>
              <li>Finish building this website.</li>
            </ul>
          </div>
        </div>
        <div className={styles.weekday}>
          <h1>Sunday</h1>
          <div>
            <ul>
              <li>Finish building this website.</li>
            </ul>
          </div>
        </div>
      </div>

      <h1>Your Todolist:</h1>
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
      </div>
    </div>
  );
}
