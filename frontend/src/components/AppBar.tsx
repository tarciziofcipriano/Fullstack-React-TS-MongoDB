import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material";

const AppBar = () => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          My Header
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
