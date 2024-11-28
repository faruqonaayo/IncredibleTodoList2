import { Button, SafeAreaView } from "react-native";
import { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import MainLayout from "../layouts/MainLayout";

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  function addTask(task) {
    const newTask = [...tasks, task];
    setTasks(newTask);
  }
  return (
    <MainLayout>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />

        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
    </MainLayout>
  );
}
