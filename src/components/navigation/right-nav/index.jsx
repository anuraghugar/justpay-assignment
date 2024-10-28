import React from "react";
import "./index.scss";
import NotificationsList from "./notification-card";
import ActivitiesList from "./activities-card";
import ContactList from "./contact-card";

const RightNav = () => {
  return (
    <div>
      <NotificationsList />
      <ActivitiesList />
      <ContactList />
    </div>
  );
};

export default RightNav;
