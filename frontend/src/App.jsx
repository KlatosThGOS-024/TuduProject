import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { TodoPage } from "./pages/TodoPage";
import { ProtectedRoute } from "./security/ProtectedRoute";
import { PublicRoute } from "./security/PublicRoute";
import { TodoPagee } from "./pages/TodoPagee";
import { TodayPage } from "./pages/TodayPage";
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
          {/* <Route path="/to/today" element={<TodayPage />} /> */}
          <Route path="/to/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
{
  /* <Route element={<ProtectedRoute />}>   </Route> */
}
