import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./index.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import chartPieSlice from "../../../assets/icons/ChartPieSlice.svg";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<h6 className="side-menu-heading">Dashboards</h6>),
  getItem("Default", "dashboard-default"),
  getItem("eCommerce", "dashboard-ecommerce", <chartPieSlice />, [
    getItem("one", "dashboard-ecommerce-one"),
    getItem("two", "dashboard-ecommerce-two"),
    getItem("three", "dashboard-ecommerce-three"),
  ]),
  getItem("Projects", "dashboard-projects", <TeamOutlined />, [
    getItem("one", "dashboard-projects-one"),
    getItem("two", "dashboard-projects-two"),
  ]),
  getItem("Online Courses", "dashboard-courses", <TeamOutlined />, [
    getItem("Team 1", "dashboard-courses-team1"),
    getItem("Team 2", "dashboard-courses-team2"),
  ]),
  getItem(<h6 className="side-menu-heading">Pages</h6>),
  getItem("User Profile", "pages-userprofile", <UserOutlined />, [
    getItem("Overview", "pages-userprofile-overview"),
    getItem("Projects", "pages-userprofile-projects"),
    getItem("Campaigns", "pages-userprofile-campaigns"),
    getItem("Documents", "pages-userprofile-documents"),
    getItem("Followers", "pages-userprofile-followers"),
  ]),
  getItem("Accounts", "pages-accounts", <UserOutlined />, []),
  getItem("User Profile", "pages-userprofile-empty", <UserOutlined />, []),
  getItem("Corporate", "pages-corporate", <UserOutlined />, []),
  getItem("Blog", "pages-blog", <UserOutlined />, []),
  getItem("Social", "pages-social", <UserOutlined />, []),
];

const LeftNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderMenuItem = (item) => {
    if (item.children) {
      return (
        <Menu.SubMenu
          key={item.key}
          title={
            <span>
              {item.icon}
              {item.label}
              <span className="ant-menu-submenu-arrow">
                <MdKeyboardArrowRight />
              </span>
            </span>
          }
        >
          {item.children.map(renderMenuItem)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        {item.label}
      </Menu.Item>
    );
  };

  const handleClick = (e) => {
    console.log("Clicked key:", e.key); // Access the clicked key here
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          defaultSelectedKeys={["dashboard-default"]}
          defaultOpenKeys={[""]}
          mode="inline"
          onClick={handleClick}
        >
          {items.map(renderMenuItem)}
        </Menu>
      </Sider>
      {/* Uncomment if you want to use Header and Content */}
      {/* <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        ></Content>
      </Layout> */}
    </Layout>
  );
};

export default LeftNav;
