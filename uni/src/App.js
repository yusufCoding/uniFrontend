import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import EAS from './components/EAS';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="" element={<Login />}></Route>
          <Route path="/eas" element={<EAS />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
