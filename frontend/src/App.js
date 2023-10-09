import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login";
import Faculty from "./components/Faculty/Faculty";
import Signup from "./components/Auth/Signup";
import SemesterAll from "./components/Semester/SemesterAll";
import SemesterPage from "./components/Semester/SemesterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="semester/all" element={<SemesterAll />}></Route>
          <Route path="faculty" element={<Faculty />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="/semester/:semesterId" element={<SemesterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
