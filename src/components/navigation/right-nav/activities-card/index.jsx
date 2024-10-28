import React from "react";
import activities from "../data/activities.json";
import "./index.scss";
import userOne from "../../../../assets/icons/3D05.svg";
import userTwo from "../../../../assets/icons/3D08.svg";
import userThree from "../../../../assets/icons/Female05.svg";
import userFour from "../../../../assets/icons/Male07.svg";
import userFive from "../../../../assets/icons/Male11.svg";

const Activities = ({ type, message, time }) => {
  const getIcon = (type) => {
    switch (type) {
      case "user1":
        return <img src={userOne} alt="user1" />;
      case "user2":
        return <img src={userTwo} alt="user2" />;
      case "user3":
        return <img src={userThree} alt="user3" />;
      case "user4":
        return <img src={userFour} alt="user4" />;
      case "user5":
        return <img src={userFive} alt="user5" />;
      default:
      case "user1":
        return <img src={userOne} alt="user1" />;
    }
  };

  return (
    <div className="activities-item">
      <span className="activities-icon">{getIcon(type)}</span>
      <div className="activities-content">
        <p className="activities-text">{message}</p>
        <span className="activities-time">{time}</span>
      </div>
    </div>
  );
};

const ActivitiesList = () => {
  return (
    <div className="activities-list">
      <p className="activities-header">Activities</p>
      {activities.map((activity) => (
        <Activities
          key={activity.id}
          type={activity.type}
          message={activity.message}
          time={activity.time}
        />
      ))}
    </div>
  );
};

export default ActivitiesList;
