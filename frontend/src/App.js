import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Faculty from "./components/Faculty/Faculty";
import SemesterAll from "./components/Semester/SemesterAll";
import SemesterPage from "./components/Semester/SemesterPage";
import Reset_pass from "./components/Auth/forgot_password";
import Request_page from "./components/Auth/Request";

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
          <Route path="reset" element={<Reset_pass />}></Route>
          <Route path="request" element={<Request_page />}></Route>
          <Route path="/semester/:semesterId" element={<SemesterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
