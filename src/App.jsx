import "./App.css";
import Posts from "./pages/Posts/Posts";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import { Routes, Route } from "react-router-dom";
import { useLogin } from "./hooks/useLogin";
import { CHAT, LAST_NEWS, LOGIN, MY_POSTS } from "./constants/routes";
function App() {
  useLogin();
  return (
    <Routes>
      <Route path={LAST_NEWS} element={<Posts />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={CHAT} element={<Chat />} />
    </Routes>
  );
}

export default App;
