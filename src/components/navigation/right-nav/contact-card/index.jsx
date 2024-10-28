import React from "react";
import contacts from "../data/contact.json";
import "./index.scss";
import userOne from "../../../../assets/icons/3D05.svg";
import userTwo from "../../../../assets/icons/3D08.svg";
import userThree from "../../../../assets/icons/Female05.svg";
import userFour from "../../../../assets/icons/Male07.svg";
import userFive from "../../../../assets/icons/Male11.svg";

const Contacts = ({ type, user }) => {
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
      case "user6":
        return <img src={userFive} alt="user6" />;
      default:
      case "user1":
        return <img src={userOne} alt="user1" />;
    }
  };

  return (
    <div className="contact-item">
      <span className="contact-icon">{getIcon(type)}</span>
      <div className="contact-content">
        <p className="contact-text">{user}</p>
      </div>
    </div>
  );
};

const ContactList = () => {
  return (
    <div className="contact-list">
      <p className="contact-header">Contacts</p>
      {contacts.map((activity) => (
        <Contacts key={activity.id} type={activity.type} user={activity.user} />
      ))}
    </div>
  );
};

export default ContactList;
