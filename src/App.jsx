import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./pages/auth";
import SignUp from "./pages/auth/sign_up";
import SignIn from "./pages/auth/sign_in";
import Dashboard from "./pages/dashboard";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="*" element={<Navigate to="/sign-up" />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/dashboard" element={<ProtectedRoutes Component={Dashboard} />} />
      </Routes>
    </>
  );
}

export default App;
