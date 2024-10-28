import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./index.scss";

// Sample data
const data = [
  { name: "New York", revenue: 72 },
  { name: "San Francisco", revenue: 39 },
  { name: "Sydney", revenue: 25 },
  { name: "Singapore", revenue: 61 },
];

const RevenueByLocation = () => {
  return (
    <div className="revenue-container">
      <div className="revenue-location-header">Revenue by Location</div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" width={100} />
          <Tooltip />
          <Bar dataKey="revenue" className="revenue-bar" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueByLocation;
