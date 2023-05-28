import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import Feed from "./pages/Feed/Feed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/" element={<Feed />} />
        {/* <Route path="/form" element={<Form />} /> */}
      </Routes>
    </Router>
  );
};

export default App;