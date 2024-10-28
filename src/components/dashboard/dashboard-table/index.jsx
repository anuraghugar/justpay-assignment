import React from "react";
import { Table } from "antd";
import "./index.scss";

const DashboardTable = () => {
  const dataSource = [
    {
      key: "1",
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: "1",
      amount: "10 Downing Street",
    },
    {
      key: "2",
      name: "Marco Lightweight Shirt",
      price: "$79.49",
      quantity: "22",
      amount: "10 Downing Street",
    },
    {
      key: "3",
      name: "Half Sleeve  Shirt",
      price: "$79.49",
      quantity: "33",
      amount: "10 Downing Street",
    },
    {
      key: "4",
      name: "Lightweight Jacket",
      price: "$79.49",
      quantity: "44",
      amount: "10 Downing Street",
    },
    {
      key: "5",
      name: "Marco Shoes",
      price: "$79.49",
      quantity: "55",
      amount: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];

  return (
    <div className="dashboard-table-container">
      <div className="dashboard-table-header">Top Selling Products</div>
      <Table
        className="dashboard-table-body"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default DashboardTable;
