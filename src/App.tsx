import { Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditPost from "./components/EditPost";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </Stack>
    </Router>
  );
}

export default App;
