// Data for the first chart
const data1 = [
    { year: 2020, value: 72.81 },
    { year: 2021, value: 73.16 },
    { year: 2022, value: 73.77 },
    { year: 2023, value: 74.39 }
];

const svg1 = d3.select(".svg1"),
    margin1 = { top: 40, right: 30, bottom: 60, left: 40 },
    width1 = +svg1.attr("width") - margin1.left - margin1.right,
    height1 = +svg1.attr("height") - margin1.top - margin1.bottom,
    g1 = svg1.append("g").attr("transform", `translate(${margin1.left},${margin1.top})`);

const x1 = d3.scaleBand()
    .domain(data1.map(d => d.year))
    .range([0, width1])
    .padding(0.1);

const y1 = d3.scaleLinear()
    .domain([68, 82])
    .range([height1, 0]);

const line1 = d3.line()
    .x(d => x1(d.year) + x1.bandwidth() / 2)
    .y(d => y1(d.value));

g1.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", `translate(0,${height1})`)
    .call(d3.axisBottom(x1).tickFormat(d3.format("d")));

g1.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y1).ticks(1));

g1.append("path")
    .datum(data1)
    .attr("class", "line ipm")
    .attr("d", line1);

g1.selectAll(".dot")
    .data(data1)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", d => x1(d.year) + x1.bandwidth() / 2)
    .attr("cy", d => y1(d.value))
    .attr("r", 5);

g1.selectAll(".label")
    .data(data1)
    .enter().append("text")
    .attr("class", "label")
    .attr("x", d => x1(d.year) + x1.bandwidth() / 2)
    .attr("y", d => y1(d.value) - 10)
    .text(d => d.value);

// IPM Tinggi line
g1.append("line")
    .attr("class", "line ipm-tinggi")
    .attr("x1", 0)
    .attr("y1", y1(70))
    .attr("x2", width1)
    .attr("y2", y1(70));

g1.append("text")
    .attr("class", "axis-label")
    .attr("x", width1)
    .attr("y", y1(70) - 5)
    .attr("text-anchor", "end")
    .text("IPM Tinggi");

// IPM Sangat Tinggi line
g1.append("line")
    .attr("class", "line ipm-sangat-tinggi")
    .attr("x1", 0)
    .attr("y1", y1(80))
    .attr("x2", width1)
    .attr("y2", y1(80));

g1.append("text")
    .attr("class", "axis-label")
    .attr("x", width1)
    .attr("y", y1(80) - 5)
    .attr("text-anchor", "end")
    .text("IPM Sangat Tinggi");

// Data for the second chart
const data2 = [
    { year: 2020, value: 73.37 },
    { year: 2021, value: 73.46 },
    { year: 2022, value: 73.70 },
    { year: 2023, value: 73.93 }
];

const svg2 = d3.select(".svg2"),
    margin2 = { top: 40, right: 30, bottom: 60, left: 40 },
    width2 = +svg2.attr("width") - margin2.left - margin2.right,
    height2 = +svg2.attr("height") - margin2.top - margin2.bottom,
    g2 = svg2.append("g").attr("transform", `translate(${margin2.left},${margin2.top})`);

const x2 = d3.scaleBand()
    .domain(data2.map(d => d.year))
    .range([0, width2])
    .padding(0.1);

const y2 = d3.scaleLinear()
    .domain([68, 82])
    .range([height2, 0]);

const line2 = d3.line()
    .x(d => x2(d.year) + x2.bandwidth() / 2)
    .y(d => y2(d.value));

g2.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", `translate(0,${height2})`)
    .call(d3.axisBottom(x2).tickFormat(d3.format("d")));

// g2.append("g")
//     .attr("class", "axis axis--y")
//     .call(d3.axisLeft(y2).ticks(1));

g2.append("path")
    .datum(data2)
    .attr("class", "line ipm")
    .attr("d", line2);

g2.selectAll(".dot")
    .data(data2)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", d => x2(d.year) + x2.bandwidth() / 2)
    .attr("cy", d => y2(d.value))
    .attr("r", 5);

g2.selectAll(".label")
    .data(data2)
    .enter().append("text")
    .attr("class", "label")
    .attr("x", d => x2(d.year) + x2.bandwidth() / 2)
    .attr("y", d => y2(d.value) - 10)
    .text(d => d.value);

const dataHLS = [
    { year: 2020, value: 12.98 },
    { year: 2021, value: 13.08 },
    { year: 2022, value: 13.10 },
    { year: 2023, value: 13.15 }
];

const dataRLS = [
    { year: 2020, value: 8.48 },
    { year: 2021, value: 8.54 },
    { year: 2022, value: 8.69 },
    { year: 2023, value: 8.77 }
];

const svg3 = d3.select(".svg3"),
    margin3 = { top: 40, right: 30, bottom: 100, left: 40 },
    width3 = +svg3.attr("width") - margin3.left - margin3.right,
    height3 = +svg3.attr("height") - margin3.top - margin3.bottom,
    g3 = svg3.append("g").attr("transform", `translate(${margin3.left},${margin3.top})`);

const x3 = d3.scaleBand()
    .domain(dataHLS.map(d => d.year))
    .range([0, width3])
    .padding(0.1);

const y3 = d3.scaleLinear()
    .domain([8, 14])
    .range([height3, 0]);

const lineHLS = d3.line()
    .x(d => x3(d.year) + x3.bandwidth() / 2)
    .y(d => y3(d.value));

const lineRLS = d3.line()
    .x(d => x3(d.year) + x3.bandwidth() / 2)
    .y(d => y3(d.value));

g3.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", `translate(0,${height3})`)
    .call(d3.axisBottom(x3).tickFormat(d3.format("d")));

// Removing Y Axis
// g3.append("g")
//     .attr("class", "axis axis--y")
//     .call(d3.axisLeft(y3));

g3.append("path")
    .datum(dataHLS)
    .attr("class", "line hls")
    .attr("d", lineHLS);

g3.append("path")
    .datum(dataRLS)
    .attr("class", "line rls")
    .attr("d", lineRLS);

g3.selectAll(".dot.hls")
    .data(dataHLS)
    .enter().append("circle")
    .attr("class", "dot hls")
    .attr("cx", d => x3(d.year) + x3.bandwidth() / 2)
    .attr("cy", d => y3(d.value))
    .attr("r", 5);

g3.selectAll(".dot.rls")
    .data(dataRLS)
    .enter().append("circle")
    .attr("class", "dot rls")
    .attr("cx", d => x3(d.year) + x3.bandwidth() / 2)
    .attr("cy", d => y3(d.value))
    .attr("r", 5);

g3.selectAll(".label.hls")
    .data(dataHLS)
    .enter().append("text")
    .attr("class", "label hls")
    .attr("x", d => x3(d.year) + x3.bandwidth() / 2)
    .attr("y", d => y3(d.value) - 10)
    .text(d => d.value);

g3.selectAll(".label.rls")
    .data(dataRLS)
    .enter().append("text")
    .attr("class", "label rls")
    .attr("x", d => x3(d.year) + x3.bandwidth() / 2)
    .attr("y", d => y3(d.value) - 10)
    .text(d => d.value);

// Add legend
const legend = svg3.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width3 / 2 - 70},${height3 + margin3.top + 50})`);

legend.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 6).style("fill", "blue");
legend.append("circle").attr("cx", 0).attr("cy", 30).attr("r", 6).style("fill", "orange");
legend.append("text").attr("x", 20).attr("y", 0).text("Harapan Lama Sekolah (HLS)").style("font-size", "15px").attr("alignment-baseline", "middle");
legend.append("text").attr("x", 20).attr("y", 30).text("Rata-rata Lama Sekolah (RLS)").style("font-size", "15px").attr("alignment-baseline", "middle");

// Data for the forth chart
const data4 = [
    { year: 2020, value: 11013 },
    { year: 2021, value: 11156 },
    { year: 2022, value: 11479 },
    { year: 2023, value: 11899 }
];

const svg4 = d3.select(".svg4"),
    margin4 = { top: 40, right: 30, bottom: 60, left: 40 },
    width4 = +svg4.attr("width") - margin4.left - margin4.right,
    height4 = +svg4.attr("height") - margin4.top - margin4.bottom,
    g4 = svg4.append("g").attr("transform", `translate(${margin4.left},${margin4.top})`);

const x4 = d3.scaleBand()
    .domain(data4.map(d => d.year))
    .range([0, width4])
    .padding(0.1);

const y4 = d3.scaleLinear()
    .domain([10000, 12000])
    .range([height4, 0]);

const line4 = d3.line()
    .x(d => x4(d.year) + x4.bandwidth() / 2)
    .y(d => y4(d.value));

g4.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", `translate(0,${height4})`)
    .call(d3.axisBottom(x4).tickFormat(d3.format("d")));

// Removing Y Axis
// g4.append("g")
//     .attr("class", "axis axis--y")
//     .call(d3.axisLeft(y4).ticks(1));

g4.append("path")
    .datum(data4)
    .attr("class", "line ipm")
    .attr("d", line4);

g4.selectAll(".dot")
    .data(data4)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", d => x4(d.year) + x4.bandwidth() / 2)
    .attr("cy", d => y4(d.value))
    .attr("r", 5);

g4.selectAll(".label")
    .data(data4)
    .enter().append("text")
    .attr("class", "label")
    .attr("x", d => x4(d.year) + x4.bandwidth() / 2)
    .attr("y", d => y4(d.value) - 10)
    .text(d => d.value);
