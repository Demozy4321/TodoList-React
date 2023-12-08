import { Typography } from "@mui/material";

const PageHeading = ({ children }) => {
  return (
    <Typography variant="h5" sx={{ fontWeight: 700, color: "#f54242" }}>
      {children}
    </Typography>
  );
};

export default PageHeading;
