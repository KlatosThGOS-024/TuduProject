import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { TodoPage } from "./pages/TodoPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Logout } from "./components/Logout";
import { PublicRoute } from "./security/PublicRoute";
import { ProtectedRoute } from "./security/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/to/todo" element={<TodoPage />} />
            <Route path="/to/profile" element={<ProfilePage />} />
            <Route path="/to/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
