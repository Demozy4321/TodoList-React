import { useEffect, useState } from "react";
import { axiosInstance } from "../utility/axios";
import TodoItem from "./TodoItem";
import { Divider, Stack } from "@mui/material";

const TodoList = ({ todolist, getTodoList }) => {
  return (
    <Stack
      //   spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
      sx={{
        width: "100%",
        border: "1px solid",
        padding: "0 10px",
        justifyContent: "center",
      }}>
      {todolist?.map((item) => {
        return (
          <TodoItem key={item.id} itemProp={item} getTodoList={getTodoList} />
        );
      })}
    </Stack>
  );
};

export default TodoList;
