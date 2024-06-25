import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
const Charts = () => {
  return (
    <div
      style={{
        padding: "15px",
        height: 500,
        width: 540,
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <header>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "2rem",
          }}
        >
          <div style={{ fontWeight: "bold" }}>Vulnerabilities by OS</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Icon
              icon="bx:grid-vertical"
              style={{ color: "lightgray", fontSize: "28px" }}
            />
            <Icon
              icon={"hugeicons:arrow-expand"}
              style={{ color: "lightgray", fontSize: "24px" }}
            />

            <Icon
              icon="charm:menu-kebab"
              style={{ color: "lightgray", fontSize: "24px" }}
            />
          </div>
        </nav>
      </header>
      <Card />
    </div>
  );
};

export default Charts;
