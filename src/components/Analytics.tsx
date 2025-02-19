
import { default as React, useState } from "react";
import MainLayout from "./MainLayout";
import '../css/Analytics.css';
import BarChart1 from '../Pages/BarChart1'
  import BarChart2 from "../Pages/BarChart2";
import PieChart1 from "../Pages/PieChart1";

const Analytics: React.FC = () => {
    

    return (
        <React.Fragment>
            <div className="analytics">
                
                    <div className="analytics_content">
                        <h5>Analytics</h5>
                        <h4>Analytics-Andrew Jhonston</h4>
                        <h3>Andrew Jhonston</h3>
                        <h2></h2>
                        <div className="analytics_center">
                        <div className="overall_rating_card">
                                <PieChart1></PieChart1>
                        </div>
                        <div className="analytics_chart1">
                            <BarChart1></BarChart1>
                        </div>
                        <div className="analytics_chart2">
                            <BarChart2></BarChart2>
                        </div>
                        </div>
                        <div className="analytics_swot">
                            <div className="sw">
                                <label>Strength</label>
                                <textarea readOnly>The individual has good comprehension and listening skills, which suggests they can understand spoken information and instructions well. This is crucial for effective communication and collaboration.</textarea>
                                <label>Weaknesses</label>
                                <textarea readOnly>The individual may struggle with articulating ideas smoothly or coming up with spontaneous responses, affecting their confidence in conversation.</textarea>
                            </div>
                            <div className="ot">
                                <label>Opportuinities</label>
                                <textarea readOnly>With targeted speech and communication training, especially focused on improving grammar, fluency, and pronunciation, the individual has the opportunity to significantly enhance their communication skills.</textarea>
                                <label>Threats</label>
                                <textarea readOnly> Poor pronunciation, grammar, and speech clarity may lead to miscommunication or misunderstandings, which could hinder personal and professional relationships.</textarea>
                            </div>
                        </div>
                    </div>
                
          </div>
        </React.Fragment>
    );
}

export default Analytics;