import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Home";
import CreatePost from "./Component/CreatePost";
import EditPost from "./Component/EditPost";
import NavBar from './Component/NavBar';
const App = () => {
  return (
    <Router>
      <section>
        <article>
          <header>
            <NavBar />
            <ToastContainer />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-post" element={<CreatePost />} />
              <Route path="/update-post/:id" element={<EditPost />} />
            </Routes>
          </main>
        </article>
      </section>
    </Router>
  );
};

export default App;
