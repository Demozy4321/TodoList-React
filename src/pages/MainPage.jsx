import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/reducers/UserReducer";
import axios from "axios";

const MainPage = () => {
  const userDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const demoData = {
    email: "demo@gmail.com",
    fullName: "demo",
    userName: "demo",
    createdOn: "ttt",
    updatedOn: "asdf",
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    /*
      api call to backend,
      if success then set the user reducer
      if failed then show error - credentials doesn't match
    */

    try {
      let res = await axios.post(
        "http://localhost:8081/auth/userLogin",
        formData
      );

      if (res.data && res.data.status) {
        dispatch(setUser(res.data.data));
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    dispatch(setUser(demoData));
  };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} minHeight={"100vh"}>
      <Stack
        minWidth={"30vw"}
        sx={{
          border: "1px solid black",
          padding: "10px",
        }}>
        <form onSubmit={handleFormSubmit}>
          <Stack spacing={1} alignItems={"center"}>
            <TextField
              label="Email"
              sx={{ width: "100%" }}
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              type="password"
              label="Password"
              name="password"
              sx={{ width: "100%" }}
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <Stack spacing={2} direction="row">
              <Button type="submit" variant="contained" size="small">
                Log In
              </Button>
              <Button variant="contained" size="small">
                Register
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default MainPage;
