import { Box, Stack, Typography } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import ToDoListView from "./pages/ToDoListView";

function App() {
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
}

export default App;
