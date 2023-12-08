import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";

const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {["Dashboard", "Todo-List", "Send email", "Drafts"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
  </div>
);

const Sidebar = () => {
  return (
    <Stack>
      <Drawer
        sx={{
          ".MuiDrawer-paper": {
            top: "64px",
            border: "1px solid #e5e5e5",
            width: "15vw",
          },
          ".css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
            top: "64px",
            width: "15vw",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          },
        }}
        variant="permanent"
        anchor="left">
        <div>
          <Toolbar />
          <Divider />
          <List>
            <ListItem key={"dashboard"} disablePadding>
              <ListItemButton component={Link} to={`/`}>
                <ListItemIcon>
                  <GridViewIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"todolist"} disablePadding>
              <ListItemButton component={Link} to={`/todolist`}>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary={"Todo-List"} />
              </ListItemButton>
            </ListItem>

            {/* {["Dashboard", "Todo-List", "Send email", "Drafts"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton component={Link} to={`/todoList`}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )} */}
          </List>
          <Divider />
        </div>
      </Drawer>
    </Stack>
  );
};

export default Sidebar;
