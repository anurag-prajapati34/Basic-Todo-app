import React, { useState } from "react";
import TodoList from "./TodoList";
import AddButton from "./AddButton";
import "./ToDo.css";

export default function ToDo() {
  let [task, setTask] = useState("");
  let taskList = ["Learn React"];

  let [showTask, setShowTask] = useState([]);
  let [completedTask, setCompletedTask] = useState([]);

  const handleInputTask = (event) => {
    let inputValue = event.target.value;
    setTask(inputValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const addTask = () => {
    if (task !== "") {
      const addNewTask = {
        newTask: task,
      };
      const oldTaskList = showTask;

      setShowTask(oldTaskList.concat(addNewTask));
    } else {
      alert("Please enter Task !");
    }

    setTask("");
  };

  const deleteTask = (deleteTodoIndex) => {
    const newTodoList = showTask.filter(
      (_, index) => deleteTodoIndex !== index
    );
    setShowTask(newTodoList);
  };

  const completeTask = (cTaskindex) => {
    const updatedShowTask = showTask.filter((_, index) => cTaskindex !== index);
    setShowTask(updatedShowTask);
    const newCompleteTask = completedTask;
    setCompletedTask(newCompleteTask.concat(showTask[cTaskindex]));
    console.log(newCompleteTask);
  };

  const uncheckTask = (checkedTaskIndex) => {
    const checkedTask = completedTask[checkedTaskIndex];

    const taskListWithoutUncheckedTask = showTask;

    const updatedShowTask = taskListWithoutUncheckedTask.concat(checkedTask);

    setShowTask(updatedShowTask);

    const modifiedCheckedTaskList = completedTask.filter(
      (_, index) => index !== checkedTaskIndex
    );
    setCompletedTask(modifiedCheckedTaskList);
  };

const editTask=(taskIndex)=>{
  let taskToEdit=showTask[taskIndex].newTask;
  setTask(taskToEdit);
  let afterEditShowTask=showTask.filter((_,index)=>index!=taskIndex);
  setShowTask(afterEditShowTask);


}


  return (
    <div className="todoApp">
      <div className="todoAppContentContainer">
        <div>
          {/*form to take user input of task/todos */}
          <form onSubmit={handleFormSubmit}>
            <input
              className="inputBox"
              type="text"
              name="task"
              placeholder="Add new task...."
              value={task}
              onChange={handleInputTask}
              autoComplete="off"
              act
            ></input>
            {/*button to add tasks */}
            {/* <button type="submit" onClick={addTask}>
            Add
          </button> */}
            <AddButton addTask={addTask} />
          </form>
        </div>

        {/*Component for showing tasks */}

        <TodoList
          taskList={showTask}
          deleteTask={deleteTask}
          completeTask={completeTask}
          completedTask={completedTask}
          uncheckTask={uncheckTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}
