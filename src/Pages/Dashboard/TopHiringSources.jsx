import { BarChart } from "@mui/x-charts/BarChart";

import React from "react";
const WDdata = [32, 25, 22, 11, 22, 29, 16, 25, 9, 23, 25, 13];
const QAdata = [32, 25, 22, 11, 22, 29, 16, 25, 9, 23, 25, 13];
const ADdata = [32, 25, 22, 11, 22, 29, 16, 25, 9, 23, 25, 13];
const UDdata = [32, 25, 22, 11, 22, 29, 16, 25, 9, 23, 25, 13];
const xLabels = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const TopHiringSources = () => {
  return (
    <>
      <div style={{paddingLeft:'10',  display: "flex", alignItems: "flex-end" }}>
        <BarChart
          className="BarSize"
          height={400} // Set the height to 400 units
          
          series={[
            {
              data: WDdata,
              label: "Web Developer",
              id: "WD",
              stack: "total",
              color: "#F1D1E2",
            },
            {
              data: QAdata,
              label: "Quality Assurance",
              id: "QA",
              stack: "total",
              color: "#F5558D",
            },
            {
              data: ADdata,
              label: "App Development",
              id: "AD",
              stack: "total",
              color: "#F19828",
            },
            {
              data: UDdata,
              label: "Ui/Ux Designer",
              id: "UD",
              stack: "total",
              color: "#484C7F",
            },
          ]}

          xAxis={[{ data: xLabels, scaleType: "band" }]}
          legend={{
            direction: "column",
            position: {
              vertical: "top",
              horizontal: "middle",
            }
          }}
          sx={{
            "--ChartsLegend-rootOffsetX": "300px",
            "--ChartsLegend-rootOffsetY": "20px",
          }}
        />
      </div>
    </>
  );
};

export default TopHiringSources;
