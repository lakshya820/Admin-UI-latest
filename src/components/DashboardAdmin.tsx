import { default as React, useState } from "react";
import MainLayout from "./MainLayout";
import '../css/DashboardAdmin.css';
import GradientChart1 from "../Pages/GradientChart1";

const DashboardAdmin: React.FC = () => {
    

    return (
        <React.Fragment>
            <div className="admin_dashboard">
                    <div className="dashboard_header">
                        <p>Dashboard</p>
                        </div>
                        <div className="dashboard_center">
                            <div className="dashboard_chart1">
                            <GradientChart1></GradientChart1>
                            </div>
                        </div>
                    

          </div>
        </React.Fragment>
    );
}

export default DashboardAdmin;