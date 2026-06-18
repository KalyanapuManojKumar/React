import { useReducer, useState } from "react";

import styles from "./TaskManager.module.css";

import { taskReducer } from "./taskReducer";
import { initialState } from "./initialState";

const TaskManager = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: task,
    });

    setTask("");
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>Task Manager</h1>

      <div className={styles.inputGroup}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          className={styles.input}
        />

        <button onClick={addTask} className={styles.addButton}>
          Add
        </button>
      </div>

      {state.tasks.map((task) => (
        <div key={task.id} className={styles.taskCard}>
          <span className={task.completed ? styles.completed : ""}>
            {task.title}
          </span>

          <div>
            <button
              className={styles.completeBtn}
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TASK",
                  payload: task.id,
                })
              }
            >
              Complete
            </button>

            <button
              className={styles.deleteBtn}
              onClick={() =>
                dispatch({
                  type: "DELETE_TASK",
                  payload: task.id,
                })
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskManager;
