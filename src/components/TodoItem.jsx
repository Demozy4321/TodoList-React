import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { axiosInstance } from "../utility/axios";
import EditTodoModal from "./EditTodoModal";

const TodoItem = (props) => {
  const [open, setOpen] = useState(false);

  const deleteTask = async (id) => {
    try {
      let res = await axiosInstance.post(
        `https://todo-app-service-utsu.onrender.com/api/v1/todo/deleteTodo?itemId=${id}`
      );

      if (res.data.status) {
        props.getTodoList();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Typography>{props.itemProp.todoHeading}</Typography>
      <Box>
        <IconButton onClick={() => setOpen(true)}>
          <Edit fontSize="small" color="primary" />
        </IconButton>
        <IconButton onClick={() => deleteTask(props.itemProp.todoId)}>
          <Delete fontSize="small" color="error" />
        </IconButton>
      </Box>
      <EditTodoModal
        open={open}
        setOpen={setOpen}
        todoItem={props.itemProp}
        getTodoList={props.getTodoList}
      />
    </Stack>
  );
};

export default TodoItem;
