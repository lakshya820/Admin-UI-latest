
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
                        <p className="p1">Analytics</p>
                        <p className="p2">Analytics-Andrew Jhonston</p>
                        {/* <p className="p3">Andrew Jhonston</p> */}
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
                                <div className="swot-section">
                                    <div className="swot-title">Strength</div>
                                    <div className="swot-content">
                                        The individual has good comprehension and listening skills, which suggests they can understand spoken information and instructions well. This is crucial for effective communication and collaboration.
                                    </div>
                                </div>
                                <div className="swot-section">
                                    <div className="swot-title">Opportunities</div>
                                    <div className="swot-content">
                                        With targeted speech and communication training, especially focused on improving grammar, fluency, and pronunciation, the individual has the opportunity to significantly enhance their communication skills.
                                    </div>
                                </div>
                            </div>
                            <div className="ot">
                                <div className="swot-section">
                                    <div className="swot-title">Weaknesses</div>
                                    <div className="swot-content">
                                        The individual may struggle with articulating ideas smoothly or coming up with spontaneous responses, affecting their confidence in conversation.
                                    </div>
                                </div>
                                <div className="swot-section">
                                    <div className="swot-title">Threats</div>
                                    <div className="swot-content">
                                        Poor pronunciation, grammar, and speech clarity may lead to miscommunication or misunderstandings, which could hinder personal and professional relationships.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
          </div>
        </React.Fragment>
    );
}

export default Analytics;