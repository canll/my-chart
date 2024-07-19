import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const Balon = () => {
  const [data, setData] = useState([
    { id: "Active", value: 13 },
    { id: "Passive", value: 3 },
    { id: "Missing", value: 8 },
  ]);

  useEffect(() => {
    const width = 200;
    const height = 200;
    const color = d3.scaleOrdinal(["#37AB96", "#5A607F", "#F0142F"]);
    const endColor = {
      Active: "#caeee4",
      Passive: "#b6c0e5",
      Missing: "#f1b3bb",
    };
    const format = d3.format(",d");

    const pack = d3.pack().size([width, height]).padding(3);

    const root = d3.hierarchy({ children: data }).sum((d) => d.value);

    const svg = d3
      .select("#chart")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;")
      .attr("text-anchor", "middle");

    svg.selectAll("*").remove(); // Önceki grafiği temizle

    // Gradyanları tanımlama
    const defs = svg.append("defs");

    const gradient = defs
      .selectAll("radialGradient")
      .data(root.leaves())
      .join("radialGradient")
      .attr("id", (d) => `gradient-${d.data.id}`)
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "50%")
      .attr("fx", "50%")
      .attr("fy", "50%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", (d) => d3.color(color(d.data.id)).darker(0.5));

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", (d) => endColor[d.data.id]);

    const node = svg
      .append("g")
      .selectAll("g")
      .data(pack(root).leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x},${d.y})`);

    node.append("title").text((d) => `${d.data.id}\n${format(d.data.value)}`);

    node
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => `url(#gradient-${d.data.id})`)
      .attr("fill-opacity", 0.9);

    node
      .append("text")
      .attr("dy", "0.3em")
      .style("font-size", (d) => `${d.r / 4}px`)
      .text((d) => d.data.value)
      .attr("fill", "#fff");
  }, [data]);

  return <svg id="chart"></svg>;
};

export default Balon;
