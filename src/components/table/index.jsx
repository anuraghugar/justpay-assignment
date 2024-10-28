import React, { useState } from "react";
import { Space, Table, Tag, Divider, Radio } from "antd";
import tableData from "./data/table-data.json";
import "./index.scss";
import userFemale from "../../assets/icons/Female15.svg";
import calendar from "../../assets/icons/CalendarBlank.svg";

const statusColors = {
  inprogress: "#8A8CD9",
  complete: "#4AA785",
  pending: "#59A8D4",
  approved: "#FFC555",
  rejected: "#1C1C1C66",
};

const getCapitalizedText = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const dotStyle = (color) => ({
  backgroundColor: color,
  width: "8px",
  height: "8px",
  borderRadius: "50%",
});

const columns = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (user) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={userFemale}
          alt="userFemale"
          style={{ marginRight: "8px", height: "24px", width: "24px" }}
        />
        <span>{user}</span>
      </div>
    ),
  },
  {
    title: "Project",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={calendar}
          alt="calendar"
          style={{ marginRight: "5px", height: "13px", width: "12px" }}
        />
        <span>{date}</span>
      </div>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          const color = statusColors[tag] || "geekblue";
          return (
            <Tag
              key={tag}
              color="transparent"
              style={{
                color,
                backgroundColor: "transparent",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span style={dotStyle(color)} />
              <span>{getCapitalizedText(tag)}</span>
            </Tag>
          );
        })}
      </>
    ),
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

const TableComp = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <>
      <Radio.Group
        onChange={(e) => setSelectionType(e.target.value)}
        value={selectionType}
      ></Radio.Group>

      <Table
        columns={columns}
        dataSource={tableData}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
      />
    </>
  );
};
export default TableComp;
