import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from './components/Login';
import EAS from './components/EAS';
import Einführung from './components/Einführung'
import Praktikum from './components/Praktikum';
import Praktikumliste from './components/Praktikumliste';
import GetPlan from './components/GetPlan';

function App() {
  const [data, setData] = useState(null);
  const [datawahlpflicht, setDatawahlpflicht] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="" element={<Login />}></Route>
          <Route path="/eas" element={<EAS setData={setData} />}></Route>
          <Route path="/next" element={<Einführung childData={data} setDatawahlpflicht={setDatawahlpflicht} />}></Route>
          <Route path="/next2" element={<Praktikum childData={datawahlpflicht} />}></Route>
          <Route path="/next3" element={<Praktikumliste />}></Route>
          <Route path="/next4" element={<GetPlan />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
