import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
const dataMain = [
  { name: "Mac OS", value: 10, color: "#a99df3", extanion: "İOS1" },
  { name: "Linux", value: 11, color: "#8271ee", extanion: "İOS2" },
  { name: "iOS", value: 18, color: "#6a55ea", extanion: "İOS3" },
  { name: "Windows", value: 24, color: "#3f27d0", extanion: "İOS4" },
  { name: "Android", value: 37, color: "#311fa3", extanion: "İOS5" },
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
const renderCustomizedLabelextanition = ({
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
        {dataMain[index].extanion}
      </tspan>
    </text>
  );
};
const renderCenterText = (first) => {
  const textValues = {
    1: "2,938,921",
    2: "4,989,893",
    3: "2,835,465",
    4: "5,764,984",
    5: "7,658,987",
  };

  return (
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
        {textValues[first]}
      </tspan>
    </text>
  );
};

function App(show) {
  const [first, setfirst] = useState(4);
  console.log(show.show);
  const dataMainone = [
    { name: "Mac OS", value: 20, color: "#a99df3" },
    { name: "Linux", value: 30, color: "#8271ee" },
    { name: "iOS", value: 30, color: "#6a55ea" },
    { name: "Windows", value: 10, color: "#3f27d0" },
    { name: "Android", value: 10, color: "#311fa3" },
  ];
  const dataMainTwo = [
    { name: "Mac OS", value: 10, color: "#a99df3" },
    { name: "Linux", value: 9, color: "#8271ee" },
    { name: "iOS", value: 25, color: "#6a55ea" },
    { name: "Windows", value: 27, color: "#3f27d0" },
    { name: "Android", value: 29, color: "#311fa3" },
  ];
  const dataMainThree = [
    { name: "Mac OS", value: 40, color: "#a99df3" },
    { name: "Linux", value: 11, color: "#8271ee" },
    { name: "iOS", value: 18, color: "#6a55ea" },
    { name: "Windows", value: 24, color: "#3f27d0" },
    { name: "Android", value: 7, color: "#311fa3" },
  ];
  const dataMainFour = [
    { name: "Mac OS", value: 10, color: "#a99df3" },
    { name: "Linux", value: 11, color: "#8271ee" },
    { name: "iOS", value: 18, color: "#6a55ea" },
    { name: "Windows", value: 24, color: "#3f27d0" },
    { name: "Android", value: 37, color: "#311fa3" },
  ];
  const dataMainFive = [
    { name: "Mac OS", value: 10, color: "#a99df3" },
    { name: "Linux", value: 11, color: "#8271ee" },
    { name: "iOS", value: 19, color: "#6a55ea" },
    { name: "Windows", value: 4, color: "#3f27d0" },
    { name: "Android", value: 56, color: "#311fa3" },
  ];
  const dataExtensionOne = [
    { name: "Critical", value: 6, color: "#f0142f" },
    { name: "High", value: 7, color: "#ff9162" },
    { name: "Medium", value: 7, color: "#ffc122" },
    { name: "Low", value: 10, color: "#37ab96" },
  ];
  const dataExtensionTwo = [
    { name: "Critical", value: 6, color: "#f0142f" },
    { name: "High", value: 5, color: "#ff9162" },
    { name: "Medium", value: 7, color: "#ffc122" },
    { name: "Low", value: 7, color: "#37ab96" },
  ];
  const dataExtensionThree = [
    { name: "Critical", value: 4, color: "#f0142f" },
    { name: "High", value: 4.5, color: "#ff9162" },
    { name: "Medium", value: 5, color: "#ffc122" },
    { name: "Low", value: 4.5, color: "#37ab96" },
  ];
  const dataExtensionFour = [
    { name: "Critical", value: 4.5, color: "#f0142f" },
    { name: "High", value: 3, color: "#ff9162" },
    { name: "Medium", value: 7, color: "#ffc122" },
    { name: "Low", value: 3.5, color: "#37ab96" },
  ];
  const dataExtensionFive = [
    { name: "Critical", value: 6, color: "#f0142f" },
    { name: "High", value: 3.5, color: "#ff9162" },
    { name: "Medium", value: 5, color: "#ffc122" },
    { name: "Low", value: 3.5, color: "#37ab96" },
  ];
  const dataExtension = [
    { name: "Critical", value: 4, color: "#f0142f" },
    { name: "High", value: 4, color: "#ff9162" },
    { name: "Medium", value: 5, color: "#ffc122" },
    { name: "Low", value: 6, color: "#37ab96" },
  ];
  return (
    <div style={{ width: "100%", height: 500, position: "relative" }}>
      <ResponsiveContainer
        width={show.show ? "100%" : 500}
        height={show.show ? 530 : 440}
      >
        <PieChart>
          <Pie
            startAngle={90}
            endAngle={450}
            data={
              first === 1
                ? dataMainone
                : first === 2
                ? dataMainTwo
                : first === 3
                ? dataMainThree
                : first === 4
                ? dataMainFour
                : dataMainFive
            }
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={show.show ? 200 : 170}
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
            data={
              first === 1
                ? dataExtensionOne
                : first === 2
                ? dataExtensionTwo
                : first === 3
                ? dataExtensionThree
                : first === 4
                ? dataExtensionFour
                : dataExtensionFive
            }
            cx="50%"
            cy="50%"
            startAngle={
              first === 1
                ? 270
                : first === 2
                ? 160
                : first === 3
                ? 275
                : first === 4
                ? 166
                : 166
            }
            endAngle={
              first === 1
                ? 378
                : first === 2
                ? 247
                : first === 3
                ? 337
                : first === 4
                ? 230
                : 233
            }
            innerRadius={show.show ? 203 : 180}
            outerRadius={show.show ? 260 : 220}
            fill="#8884d8"
            dataKey="value"
            stroke="white"
            strokeWidth={2}
            cornerRadius={6}
            label={show.show && renderCustomizedLabelextanition}
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
          {renderCenterText(first)}
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
      {show.show ? (
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: show.show ? "1200px" : "500px",
            textAlign: "right",
          }}
        >
          <div
            onClick={() => setfirst(1)}
            style={
              first === 1
                ? {
                    marginBottom: "40px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }
                : {
                    marginBottom: "50px",
                    fontSize: "20px",
                    color: "gray",
                    cursor: "pointer",
                  }
            }
          >
            1W
          </div>
          <div
            onClick={() => setfirst(2)}
            style={
              first === 2
                ? {
                    marginBottom: "40px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }
                : {
                    marginBottom: "50px",
                    fontSize: "20px",
                    color: "gray",
                    cursor: "pointer",
                  }
            }
          >
            1M
          </div>
          <div
            onClick={() => setfirst(3)}
            style={
              first === 3
                ? {
                    marginBottom: "40px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }
                : {
                    marginBottom: "50px",
                    fontSize: "20px",
                    color: "gray",
                    cursor: "pointer",
                  }
            }
          >
            3M
          </div>
          <div
            onClick={() => setfirst(4)}
            style={
              first === 4
                ? {
                    marginBottom: "40px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }
                : {
                    marginBottom: "50px",
                    fontSize: "20px",
                    color: "gray",
                    cursor: "pointer",
                  }
            }
          >
            6M
          </div>
          <div
            onClick={() => setfirst(5)}
            style={
              first === 5
                ? {
                    marginBottom: "40px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }
                : {
                    marginBottom: "50px",
                    fontSize: "20px",
                    color: "gray",
                    cursor: "pointer",
                  }
            }
          >
            1Y
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: show.show ? "1200px" : "500px",
            textAlign: "right",
          }}
        >
          <div
            onClick={() => setfirst(1)}
            style={
              first === 1
                ? {
                    marginBottom: "30px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }
                : {
                    marginBottom: "30px",
                    fontSize: "10px",
                    color: "gray",
                    cursor: "pointer",
                  }
            }
          >
            1W
          </div>
          <div
            onClick={() => setfirst(2)}
            style={
              first === 2
                ? {
                    marginBottom: "30px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }
                : {
                    marginBottom: "30px",
                    fontSize: "10px",
                    color: "gray",
                    cursor: "pointer",
                  }
            }
          >
            1M
          </div>
          <div
            onClick={() => setfirst(3)}
            style={
              first === 3
                ? { marginBottom: "30px", fontSize: "10px", fontWeight: "bold" }
                : { marginBottom: "30px", fontSize: "10px", color: "gray" }
            }
          >
            3M
          </div>
          <div
            onClick={() => setfirst(4)}
            style={
              first === 4
                ? {
                    marginBottom: "30px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }
                : {
                    marginBottom: "30px",
                    fontSize: "10px",
                    color: "gray",
                    cursor: "pointer",
                  }
            }
          >
            6M
          </div>
          <div
            onClick={() => setfirst(5)}
            style={
              first === 5
                ? {
                    marginBottom: "30px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }
                : {
                    marginBottom: "30px",
                    fontSize: "10px",
                    color: "gray",
                    cursor: "pointer",
                  }
            }
          >
            1Y
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
