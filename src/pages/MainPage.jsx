import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MainPage = () => {
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

    console.log(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    /*
      api call to backend,
      if success then set the user reducer
      if failed then show error - credentials doesn't match
    */
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
