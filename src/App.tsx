import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
}

export default App;
