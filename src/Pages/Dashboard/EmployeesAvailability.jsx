import React from "react";
import { FaBan, FaUmbrellaBeach } from "react-icons/fa6";
import Styles from "./Dashboardstyle.module.css";

import { BiCheckSquare, BiSolidTimeFive } from "react-icons/bi";
const EmployeesAvailability = () => {
  return (
    <>
      <div className={Styles.Availability}>
        <div id={Styles.attendance}>
          <BiCheckSquare className={Styles.icons} style={{ fontSize: "2rem" }} />
          <h6>Attendance</h6>
          <span className={Styles.textMuted}>400</span>
        </div>
        <div id={Styles.late}>
          <BiSolidTimeFive style={{ fontSize: "2rem" }} />
          <h6>Late Coming</h6>
          <span className={Styles.textMuted}>400</span>
        </div>
        <div id={Styles.absent}>
          <FaBan style={{ fontSize: "2rem" }} />
          <h6>Absent</h6>
          <span className={Styles.textMuted}>400</span>
        </div>
        <div id={Styles.leave}>
          <FaUmbrellaBeach style={{ fontSize: "2rem" }} />
          <h6>Leave Apply</h6>
          <span className={Styles.textMuted}>400</span>
        </div>
      </div>
    </>
  );
};

export default EmployeesAvailability;
