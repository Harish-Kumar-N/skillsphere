import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/Topbar";
import WriteUps from "./components/WriteUps"; 

const App = () => {
  return (
    <Router basename="/skillsphere">
      <div className="min-h-screen flex flex-col w-full">
        <TopBar />  
        <div className="flex flex-1 w-full">
          <div className="flex-1 p-6 pt-20 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 w-full">
            <Routes>
              <Route path="/" element={<h1 className="text-3xl font-bold">Welcome to Skillsphere</h1>} />
              <Route path="/projects" element={<div>Projects</div>} />
              <Route path="/articles" element={<div>Articles</div>} />
              <Route path="/writeups" element={<WriteUps />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
