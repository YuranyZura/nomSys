import RegisterEmploye from "@/components/RegisterEmploye";
import Assign from "@/components/Assign";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Authentication from "./views/Authentication";
import { Toaster } from "@/components/ui/toaster";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Start from "./components/Start";
import RegisterSuper from "@/components/RegisterSupervisor";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Authentication />} />
        <Route path="registerSuper" element={<RegisterSuper />} />
        <Route path="/registerEmploye" element={<RegisterEmploye />} />
        <Route path="/assign" element={<Assign />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
