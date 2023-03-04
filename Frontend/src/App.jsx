import React from "react";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from "./pages/login";
import Signup from "./pages/signup";
const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App