import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { MainRouter, Login, Register, Dashboard } from "./pages";
import { File, Backup } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainRouter />} >
        <Route path="/" element={<Dashboard />} >
          <Route index element={<File />} />
          <Route path="/backup" element={<Backup />} />
        </Route>
      </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
