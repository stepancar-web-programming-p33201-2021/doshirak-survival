import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { MainPage } from './pages/main';
import { ReceiptPage } from './pages/receipt';

import logo from "./logo.svg";
import "./App.css";


const App: React.FC = () => {
  return (
    <div className="App">
      <header>
      </header>

      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/receipt">receipt</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/receipt" element={ <ReceiptPage /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
