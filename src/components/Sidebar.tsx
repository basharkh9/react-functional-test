import {
  Home,
  List,
  SendAndArchiveOutlined,
  SendSharp,
} from "@mui/icons-material";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box flex={1.1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <ListItemButton>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Feeds" />
      </ListItemButton>
    </Box>
  );
};

export default Sidebar;
