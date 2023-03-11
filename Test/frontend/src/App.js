import React from "react";
import "./App.css";

import { MainLayout } from "./styles/Layouts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import { Nlogin } from "./NLogin/Nlogin";
import { NRegister } from "./Components/NRegister/NRegister";
import Statistic from "./Components/Statistic/Statistic";

function App() {
  const global = useGlobalContext();
  console.log(global);

  return (
    <Router>
      <div className="App">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/incomes" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/statistic" element={<Statistic />} />
            </Route>
            <Route path="/login" element={<Nlogin />} />
            <Route path="/register" element={<NRegister />} />
            
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
