import React from "react";
import TopBar from "./components/Topbar"; 
const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <TopBar />  
        <div className="flex flex-1">
          <div className="flex-1 p-6 pt-20 sm:ml-0 md:ml-64">
            <h1 className="text-3xl font-bold">Hi! I am Harish Kumar</h1>
            <p>This site is under development</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
