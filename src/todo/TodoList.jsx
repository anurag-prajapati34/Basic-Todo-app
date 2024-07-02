import React, { useState } from "react";

import "./ToDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceDizzy,
  faSquare,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faPen, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoList({
  taskList,
  deleteTask,
  completeTask,
  completedTask,
  uncheckTask,
  editTask,
}) {
  return (
    <div className="taskListContainer">
      {taskList.length === 0 && completedTask.length !== 0 ? (
        <div className="noTasksBox">
          "Everything's done! You're on top of it."
        </div>
      ) : taskList.length === 0 ? (
        <div className="noTasksBox">
          "Your task list is empty! Add a new task to get started."
        </div>
      ) : (
        <h1 className="headings">Things to get done </h1>
      )}

      {taskList.map((taskItem, index) => (
        <div className="task">
          <h1 key={index}>{taskList[index].newTask}</h1>

          <FontAwesomeIcon
            className="deleteIcon icon "
            onClick={() => deleteTask(index)}
            icon={faTrash}
          />

          <FontAwesomeIcon className="icon" icon={faPen}
          onClick={()=>editTask(index)}
          
          
          ></FontAwesomeIcon>

          <FontAwesomeIcon
            className="checkBox icon"
            onClick={() => completeTask(index)}
            icon={faSquare}
          ></FontAwesomeIcon>
        </div>
      ))}
      {/*completed tasks list */}

      <h1 className={completedTask.length === 0 ? "hide" : "headings"}>
        Completed Tasks
      </h1>

      {completedTask.map((ctask, index) => (
        <div className="task completedTask">
          <h1 className="complete" key={index}>
            {ctask.newTask}
          </h1>

          {/* <FontAwesomeIcon className="deleteIcon icon" icon={faTrash} /> */}
          <FontAwesomeIcon
            onClick={() => uncheckTask(index)}
            className="icon"
            icon={faSquareCheck}
          ></FontAwesomeIcon>
        </div>
      ))}
    </div>
  );
}
