import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Commisions from "../pages/Commisions";
import Enterprises from "../pages/Enterprises";
import CheckShedule from "../pages/CheckShedule";
import "./../styles/Header.css";

const Header = () => {
  return (
    <>
      <Router>
        <div className="header-container">
          <Link to="/">
            {" "}
            <h1 className="app-title">AssetGuardian</h1>
          </Link>

          <ul>
            <li>
              <Link to="/commissions"> Коммисии </Link>
            </li>
            <li>
              <Link to="/enterprises"> Предприятия </Link>
            </li>
            <li>
              <Link to="/checkShedule"> График проверок </Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/commissions" element={<Commisions />} />
          <Route path="/enterprises" element={<Enterprises />} />
          <Route path="/checkShedule" element={<CheckShedule />} />
        </Routes>
      </Router>
    </>
  );
};
export default Header;
