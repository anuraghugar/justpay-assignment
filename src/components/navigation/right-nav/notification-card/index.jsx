import React from "react";
import notifications from "../data/notification.json";
import "./index.scss";
import bugBeetle from "../../../../assets/icons/BugBeetle.svg";
import user from "../../../../assets/icons/User.svg";
import broadcast from "../../../../assets/icons/Broadcast.svg";

const Notification = ({ type, message, time }) => {
  const getIcon = (type) => {
    switch (type) {
      case "bugBeetle":
        return <img src={bugBeetle} alt="bugBeetle" />;
      case "user":
        return <img src={user} alt="user" />;
      case "bugBeetle":
        return <img src={bugBeetle} alt="bugBeetle" />;
      case "broadcast":
        return <img src={broadcast} alt="Icon" />;
      default:
      case "user":
        return <img src={user} alt="user" />;
    }
  };

  return (
    <div className="notification-item">
      <span className="notification-icon">{getIcon(type)}</span>
      <div className="notification-content">
        <p className="notification-text">{message}</p>
        <span className="notification-time">{time}</span>
      </div>
    </div>
  );
};

const NotificationsList = () => {
  return (
    <div className="notification-list">
      <p className="notification-header">Notifications</p>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          type={notification.type}
          message={notification.message}
          time={notification.time}
        />
      ))}
    </div>
  );
};

export default NotificationsList;
