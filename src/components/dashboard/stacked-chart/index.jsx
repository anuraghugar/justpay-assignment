import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./index.scss";

const data = [
  { name: "Jan", projection: 10000, actual: 8000 },
  { name: "Feb", projection: 15000, actual: 12000 },
  { name: "Mar", projection: 18000, actual: 15000 },
  { name: "Apr", projection: 25000, actual: 20000 },
  { name: "May", projection: 20000, actual: 15000 },
  { name: "Jun", projection: 22000, actual: 18000 },
];

const StackedBarChart = () => (
  <div className="stacked-chart-container">
    <div className="stacked-chart-header">Projections vs Actuals</div>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={30}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="actual"
          stackId="a"
          fill="#7b9bb0"
          className="actual-bar"
        />
        <Bar
          dataKey="projection"
          stackId="a"
          fill="#c2d1e1"
          className="projection-bar"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default StackedBarChart;
