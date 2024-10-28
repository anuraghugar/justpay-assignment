import React, { useState } from "react";
import { ConfigProvider, Button } from "antd";
import DashboardIcon from "../../../assets/icons/DashboardIcon.svg";
import StarIcon from "../../../assets/icons/StarIcon.svg";
import SearchIcon from "../../../assets/icons/SearchIcon.svg";
import BrightnessIcon from "../../../assets/icons/BrightnessIcon.svg";
import HistoryIcon from "../../../assets/icons/HistoryIcon.svg";
import NotificationsIcon from "../../../assets/icons/NotificationsIcon.svg";
import "./index.scss";

const UpperNav = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
  };

  return (
    <ConfigProvider>
      <div
        className={`dashboard-header ${
          isDarkTheme ? "dark-theme" : "light-theme"
        }`}
      >
        <div className="left-section">
          <img src={DashboardIcon} alt="Dashboard" className="dashboard-icon" />
          <img src={StarIcon} alt="Star" className="dashboard-icon" />
          <span className="dashboard-text">Dashboards</span>
          <span className="separator">/</span>
          <span className="dashboard-text">Default</span>
        </div>
        <div className="right-section">
          <div className="search-container">
            <img src={SearchIcon} alt="Search" className="search-icon" />
            <input
              type="dashboard-text"
              placeholder="Search"
              className="search-input"
            />
          </div>
          <img
            src={BrightnessIcon}
            alt="Toggle Theme"
            className="dashboard-icon"
            onClick={toggleTheme}
          />
          <img src={HistoryIcon} alt="History" className="dashboard-icon" />
          <img
            src={NotificationsIcon}
            alt="Notifications"
            className="dashboard-icon"
          />
          <img
            src={DashboardIcon}
            alt="View Agenda"
            className="dashboard-icon"
          />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default UpperNav;
