import { Box, Stack, Typography } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import ToDoListView from "./pages/ToDoListView";
import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { useSelector } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return (
      <Stack>
        <Header />
        <Sidebar />
        <Stack direction="row">
          <Stack sx={{ margin: "100px 12% auto 20%", width: "100%" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/todolist" element={<ToDoListView />} />
            </Routes>
          </Stack>
        </Stack>
      </Stack>
    );
  } else {
    return <MainPage />;
  }
}

export default App;
