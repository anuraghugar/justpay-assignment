import React from "react";
import { Card, Statistic, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "./index.scss";
import UpArrow from "../../../assets/icons/UpArrow.svg";
import DownArrow from "../../../assets/icons/DownArrow.svg";

const DashboardCard = () => {
  return (
    <Row gutter={[16, 16]} className="overview-cards">
      <Col>
        <Card className="card customer-card">
          <Statistic title="Customers" value={3781} className="card-style" />
          <div className="growth positive">
            <Statistic
              value={+11.01}
              precision={2}
              prefix={<img src={UpArrow} alt="Up Arrow" className="icon" />}
              suffix="%"
            />
          </div>
        </Card>
      </Col>
      <Col>
        <Card className="card order-card">
          <Statistic title="Orders" value={1219} className="value" />
          <div className="growth negative">
            <Statistic
              value={-0.03}
              precision={2}
              prefix={<img src={DownArrow} alt="Up Arrow" className="icon" />}
              suffix="%"
            />
          </div>
        </Card>
      </Col>
      <Col>
        <Card className="card revenue-card">
          <Statistic title="Revenue" value={695} prefix="$" className="value" />
          <div className="growth positive">
            <Statistic
              value={15.03}
              precision={2}
              prefix={<img src={UpArrow} alt="Up Arrow" className="icon" />}
              suffix="%"
            />
          </div>
        </Card>
      </Col>
      <Col>
        <Card className="card growth-card">
          <Statistic title="Growth" value={30.1} suffix="%" className="value" />
          <div className="growth positive">
            <Statistic
              value={6.08}
              precision={2}
              prefix={<img src={UpArrow} alt="Up Arrow" className="icon" />}
              suffix="%"
            />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardCard;
