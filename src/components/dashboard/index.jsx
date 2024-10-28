import React from "react";
import { Layout, Card, Statistic, Row, Col, Avatar, Badge, Menu } from "antd";
import DashboardCard from "./dashboard-card";
import StackedBarChart from "./stacked-chart";
import RevenueChart from "./revenue-chart";
import DashboardTable from "./dashboard-table";
import CustomPieChart from "./pie-chart";
import "./index.scss";
import RevenueByLocation from "./revenue-by-location";

const { Header, Sider, Content } = Layout;

const Dashboard = () => (
  <>
    <div className="row mt-5">
      <div className="col-md-6">
        <DashboardCard className="dashboard-card" />
      </div>
      <div className="col-md-6">
        <StackedBarChart className="dashboard-chart" />
      </div>
    </div>

    <div className="row">
      <div className="col-md-9">
        <RevenueChart className="dashboard-chart" />
      </div>
      <div className="col-md-3">
        <RevenueByLocation />
      </div>
    </div>

    <div className="row">
      <div className="col-md-9">
        <DashboardTable className="dashboard-table" />
      </div>
      <div className="col-md-3">
        <CustomPieChart className="dashboard-chart" />
      </div>
    </div>
  </>
);

export default Dashboard;
