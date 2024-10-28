import React from "react";
import LeftNav from "../navigation/left-nav";
import UpperNav from "../navigation/upper-nav";
import RightNav from "../navigation/right-nav";
import Dashboard from "../dashboard";
import Table from "../table";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <LeftNav />
        </div>
        <div className="col-md-8">
          <UpperNav />
          <Dashboard />
          <Table />
        </div>
        <div className="col-md-2">
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Layout;
