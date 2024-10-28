import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import "./index.scss";
import BlueDot from "../../../assets/icons/BlueDot.svg";
import BlackDot from "../../../assets/icons/BlackDot.svg";

const data = [
  { name: "Jan", current: 10000, previous: 12000 },
  { name: "Feb", current: 15000, previous: 13000 },
  { name: "Mar", current: 9000, previous: 14000 },
  { name: "Apr", current: 12000, previous: 16000 },
  { name: "May", current: 16000, previous: 18000 },
  { name: "Jun", current: 20000, previous: 22000 },
];

const RevenueChart = () => (
  <div className="revenue-chart-container">
    <div className="chart-header">
      <span className="revenue-text">Revenue</span>
      <span className="revenue-line">|</span>
      <div className="chart-legend">
        <span className="">
          <img src={BlackDot}></img>
          <span className="current-week">Current Week</span>
          <span className="current-value">$58,211</span>
        </span>
        <span className="">
          <img src={BlueDot}></img>
          <span className="previous-week">CPrevious Week</span>
          <span className="previous-value">$68,768</span>
        </span>
      </div>
    </div>
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
      <Legend />

      <Line
        type="monotone"
        dataKey="previous"
        stroke="#A8C5DA"
        strokeWidth={3}
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="current"
        stroke="#1C1C1C"
        strokeWidth={3}
        dot={false}
        strokeDasharray="5 5"
      />
    </LineChart>
  </div>
);

export default RevenueChart;
