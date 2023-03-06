import React from "react";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from "./pages/login";
import ErrorPage from "./pages/404";
import Signup from "./pages/signup";
import WelcomePage from "./pages/welcome";
import WelcomePageNewUser from "./pages/newUser";
import Homepage from "./pages/home";
const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/welcomenewuser" element={<WelcomePageNewUser />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App