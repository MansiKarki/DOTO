import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LeaderMode from "./pages/LeaderMode";
import Progress from "./pages/Progress";

import HomePage from "./pages/HomePage";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={
          <div className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leader" element={<LeaderMode />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </div>
        } />
      </Routes>
    </BrowserRouter>

  );
}



export default App;