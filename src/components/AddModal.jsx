import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { axiosInstance } from "../utility/axios";

const AddModal = ({ open, setOpen, getTodoList }) => {
  const submitForm = async (e) => {
    e.preventDefault();

    var formData = {
      email: "demozy@gmail.com",
      todoHeading: e.target.taskName.value,
      todoDesc: e.target.taskDesc.value,
    };
    try {
      let res = await axiosInstance.post(
        "https://todo-app-service-utsu.onrender.com/api/v1/todo/addTodo",
        formData
      );

      if (res.data.data) {
        setOpen(false);
        getTodoList();
      }
    } catch (error) {
      console.error(error);
    }

    console.log(formData);
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={() => {
        setOpen(false);
      }}>
      <DialogTitle>Add Task</DialogTitle>
      <form onSubmit={(e) => submitForm(e)}>
        <DialogContent
          dividers
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <TextField
            size="small"
            label="Task Name"
            required
            name="taskName"></TextField>
          <TextField
            multiline
            rows={6}
            size="small"
            label="Task Description"
            required
            name="taskDesc"></TextField>
        </DialogContent>
        <DialogActions>
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

export default AddModal;
