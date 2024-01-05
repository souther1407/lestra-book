import "./App.css";
import Posts from "./pages/Posts/Posts";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
