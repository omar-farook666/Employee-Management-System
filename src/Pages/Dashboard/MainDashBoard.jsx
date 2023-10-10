import React from "react";
import "./Dashboardstyle.css";
import TotalEmployees from "./TotalEmployees";
import TopHiringSources from "./TopHiringSources";
import EmployeesAvailability from "./EmployeesAvailability";
import { Application } from "./Application";

const MainDashBoard = () => {
  return (
    <div className="container">
      <div id="employeeInfo">Employee Info</div>
      <div id="employeeAvailability">
        EmployeeAvailability
        <EmployeesAvailability />
      </div>
      <div id="totalEmployees">
        <span>Total Employees</span>
        <span style={{ margin: "2rem", fontSize: ".75rem" }}>432</span>
        <TotalEmployees />
      </div>
      <div id="topHiring">
        Top Hiring Sources
        <TopHiringSources />
      </div>
      <div id="application">
        Application
        <Application />
      </div>
    </div>
  );
};

export default MainDashBoard;
