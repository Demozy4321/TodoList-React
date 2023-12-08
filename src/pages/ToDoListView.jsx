import { Button, Container } from "@mui/material";
import TodoList from "../components/TodoList";
import PageHeading from "../components/PageHeading";
import { Add } from "@mui/icons-material";
import { useEffect, useState } from "react";
import AddModal from "../components/AddModal";
import { axiosInstance } from "../utility/axios";

const ToDoListView = () => {
  const [open, setOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [userEmail, setUserEmail] = useState("demozy@gmail.com");

  const getTaskList = async () => {
    try {
      let res = await axiosInstance.get(
        `https://todo-app-service-utsu.onrender.com/api/v1/todo/allTodos?email=${userEmail}`
      );

      if (res.data.status) {
        setTodoList(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <Container
      maxWidth="sm"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        display: "flex",
        flexDirection: "column",
      }}>
      <PageHeading>Task List</PageHeading>
      <Button
        startIcon={<Add />}
        variant="outlined"
        size="small"
        onClick={() => setOpen(true)}>
        Add Task
      </Button>
      <TodoList todolist={todoList} getTodoList={getTaskList} />
      <AddModal open={open} getTodoList={getTaskList} setOpen={setOpen} />
    </Container>
  );
};

export default ToDoListView;
