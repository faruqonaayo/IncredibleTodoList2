/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  function addTask(task) {
    const newTask = [...tasks, task];
    setTasks(newTask);
  }
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
