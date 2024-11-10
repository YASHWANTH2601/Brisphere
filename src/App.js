import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./components/Home";
import Complete from "./components/Complete";
import BookingDetails from "./components/BookIngDetails";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookingDetails" element={<BookingDetails />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </Router>
  );
};

export default App;
