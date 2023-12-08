import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utility/axios";

const EditTodoModal = ({ open, setOpen, getTodoList, todoItem }) => {
  const [todoItemData, setTodoItem] = useState({});

  const handleTaskHeadingChange = (e) => {
    setTodoItem({
      ...todoItemData,
      todoHeading: e.target.value,
    });
  };

  const handleTaskDescChange = (e) => {
    setTodoItem({
      ...todoItemData,
      todoDesc: e.target.value,
    });
  };

  const handleComplete = async () => {
    console.log("Btn clicked");

    try {
      let res = await axiosInstance.post(
        `http://localhost:4321/api/v1/todo/completeTodo?itemId=${todoItem.todoId}`
      );

      if (res.data.status) {
        setOpen(false);
        getTodoList();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const submitForm = async (e) => {
    let formData = {
      email: "demozy@gmail.com",
      todoHeading: e.target.taskName.value,
      todoDesc: e.target.taskDesc.value,
      itemId: todoItem.todoId,
    };

    try {
      let res = await axiosInstance.post(
        `http://localhost:4321/api/v1/todo/editTodo`,
        formData
      );

      if (res.data.status) {
        setOpen(false);
        getTodoList();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getTaskItem = async (itemId) => {
    try {
      let res = await axiosInstance.get(
        `http://localhost:4321/api/v1/todo/getTodoItem?itemId=${itemId}`
      );

      if (res.data.status) {
        setTodoItem(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (open) {
      getTaskItem(todoItem.todoId);
    }
  }, [open]);

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={() => {
        setOpen(false);
      }}>
      <DialogTitle>Edit Task</DialogTitle>
      <form onSubmit={(e) => submitForm(e)}>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}>
          <TextField
            size="small"
            label="Task Name"
            required
            value={todoItemData.todoHeading}
            name="taskName"
            onChange={handleTaskHeadingChange}></TextField>
          <TextField
            multiline
            rows={6}
            size="small"
            label="Task Description"
            required
            value={todoItemData.todoDesc}
            name="taskDesc"
            onChange={handleTaskDescChange}></TextField>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => handleComplete()}>
            Mark as Completed
          </Button>
          <Button
            variant="contained"
            size="small"
            color="success"
            type="submit">
            Save
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => {
              setOpen(false);
            }}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditTodoModal;
