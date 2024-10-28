import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./index.scss";

const data = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
];

const COLORS = ["#000000", "#00C49F", "#8884d8", "#8ecae6"];

const CustomPieChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={220}>
        <div className="pie-chart-header">Total Sales</div>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ index }) => (index === 0 ? "38.6%" : null)} // Display percentage for "Direct"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <div className="legend">
        {data.map((entry, index) => (
          <div key={`legend-item-${index}`} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span className="legend-text">{entry.name}</span>
            <span className="legend-value">${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPieChart;

// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "./index.scss";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const CustomPieChart = () => {
//   return (
//     <ResponsiveContainer width="100%" height={220}>
//       <PieChart>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//         <Legend />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default CustomPieChart;
