import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const dataMain = [
  { name: "Mac OS", value: 10, color: "#a99df3" },
  { name: "Linux", value: 11, color: "#8271ee" },
  { name: "iOS", value: 18, color: "#6a55ea" },
  { name: "Windows", value: 24, color: "#3f27d0" },
  { name: "Android", value: 37, color: "#311fa3" },
];

const dataExtension = [
  { name: "Critical", value: 6, color: "#f0142f" },
  { name: "High", value: 1.5, color: "#ff9162" },
  { name: "Medium", value: 7, color: "#ffc122" },
  { name: "Low", value: 3.5, color: "#37ab96" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan x={x} dy="-0.6em">
        {dataMain[index].name}
      </tspan>
      <tspan x={x} dy="1.2em">{`${(percent * 100).toFixed(0)}%`}</tspan>
    </text>
  );
};

const renderCenterText = () => (
  <text
    x="50%"
    y="50%"
    textAnchor="middle"
    dominantBaseline="middle"
    fill="#333"
    fontSize="16"
  >
    <tspan fontSize={"11"} x="50%" dy="-0.6em">
      Total Critical Vuln.
    </tspan>
    <tspan fontWeight={"bold"} x="50%" dy="1.2em">
      2,938,921
    </tspan>
  </text>
);

function App() {
  return (
    <div style={{ width: "100%", height: 500, position: "relative" }}>
      <ResponsiveContainer width={500} height={400}>
        <PieChart>
          <Pie
            startAngle={90}
            endAngle={450}
            data={dataMain}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={170}
            innerRadius={70}
            fill="#8884d8"
            dataKey="value"
            stroke="white"
            strokeWidth={3}
          >
            {dataMain.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Pie
            data={dataExtension}
            cx="50%"
            cy="50%"
            startAngle={166}
            endAngle={230}
            innerRadius={180}
            outerRadius={220}
            fill="#8884d8"
            dataKey="value"
            stroke="white"
            strokeWidth={2}
            cornerRadius={6}
          >
            {dataExtension.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke="white"
                strokeWidth={1}
              />
            ))}
          </Pie>
          {renderCenterText()}
          <Tooltip />
        </PieChart>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          {dataExtension.map((entry, index) => (
            <span
              key={`legend-${index}`}
              style={{ display: "inline-block", margin: "0 10px" }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  backgroundColor: entry.color,
                  borderRadius: "50%",
                  marginRight: 5,
                }}
              ></span>
              <span>{entry.name}</span>
            </span>
          ))}
        </div>
      </ResponsiveContainer>

      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "500px",
          textAlign: "right",
        }}
      >
        <div style={{ marginBottom: "30px", fontSize: "10px", color: "gray" }}>
          1W
        </div>
        <div style={{ marginBottom: "30px", fontSize: "10px", color: "gray" }}>
          1M
        </div>
        <div style={{ marginBottom: "30px", fontSize: "10px", color: "gray" }}>
          3M
        </div>
        <div
          style={{ marginBottom: "30px", fontSize: "10px", fontWeight: "bold" }}
        >
          6M
        </div>
        <div style={{ marginBottom: "30px", fontSize: "10px", color: "gray" }}>
          1Y
        </div>
      </div>
    </div>
  );
}

export default App;
