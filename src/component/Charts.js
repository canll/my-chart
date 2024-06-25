import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import { useState } from "react";

const Charts = () => {
  const [show, setShow] = useState(false);
  const [more, setMore] = useState(false);
  console.log(more);

  return (
    <div
      style={{
        padding: "15px",
        height: show ? 600 : 520,
        width: show ? "100%" : 540,
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        transition: "height 0.3s ease, width 0.3s ease",
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
            {/* <Icon
              icon="bx:grid-vertical"
              style={{ color: "lightgray", fontSize: "28px" }}
            /> */}
            <Icon
              onClick={() => setShow(!show)}
              onMouseEnter={() => setMore(true)}
              onMouseLeave={() => setMore(false)}
              icon={show ? "hugeicons:arrow-shrink" : "hugeicons:arrow-expand"}
              style={{
                color: more ? "black" : "lightgray",
                fontSize: "24px",
                transition: "color 0.3s ease",
              }}
            />
            {/* <Icon
              icon="charm:menu-kebab"
              style={{ color: "lightgray", fontSize: "24px" }}
            /> */}
          </div>
        </nav>
      </header>
      <Card show={show} />
    </div>
  );
};

export default Charts;
