import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";
import Styles from "./Dashboardstyle.module.css";

const TotalEmployees = () => {
  return (
    <div>
      <PieChart 
      series={[
        {
          data: [
            { id: 0, value: 60, label: 'Men' },
            { id: 1, value: 45, label: 'Women' },
          ],
        },
      ]}
      width={400}
      height={200}
      
      legend={{
        direction: "column",
        position: {
          vertical: "top",
          horizontal: "middle",
        }
      }}
      sx={{
        "--ChartsLegend-rootOffsetX": "200px",
        "--ChartsLegend-rootOffsetY": "160px",
      }}
    />
    </div>
  );
};

export default TotalEmployees;
