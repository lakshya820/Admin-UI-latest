import * as io from "socket.io-client";
import { default as React, useState } from "react";
import MainLayout from "./MainLayout";
import Header from "./Header";
import '../css/Tests2Admin.css';
import { useNavigate } from "react-router-dom";

const Tests2Admin: React.FC = () => {
    
    const navigate = useNavigate();

    const handleNavigateToTests2 = () => {
        // Perform login logic here
        navigate('/main/tests2');
      };
    
    return (
        <React.Fragment>
            <div className="tests2_admin">
              <div className="tests2_admin_header">
                <p>Tests</p>
              </div>
              
              <div className="tests2_admin_card">
                <div className="content_header">
                  <h2>Test Details</h2>
                </div>
                <div className="form_group">
                  <label htmlFor="test_name">Test Name</label>
                  <input type="text" id="test_name" name="test_name" placeholder="Empathy" />
                </div>
                <div className="form_group">
                  <label htmlFor="test_description">Test Description</label>
                  <textarea id="test_description" name="test_description" placeholder="This test is focused to teach learners how to empathize with users, when they are upset because of the issue they are facing."></textarea>
                </div>
                <div className="form_group">
                  <label htmlFor="assign_account">Assign to an account</label>
                  <select id="assign_account">
                    <option value="N/A">N/A</option>
                    {/* Add other options as needed */}
                  </select>
                  <label htmlFor="select_date">Select a date</label>
                  <input type="date" id="select_date" />
                  <label htmlFor="start_time">Start time</label>
                  <input type="time" id="start_time" />
                  <label htmlFor="end_time">End time</label>
                  <input type="time" id="end_time" />
                </div>
                <div className="form_group">
                  <h3>Questions</h3>
                  <label>Question 1</label>
                  <div>
                    <input type="radio" id="voice" name="question1_type" value="voice" />
                    <label htmlFor="voice">Voice</label>
                    <input type="radio" id="chat" name="question1_type" value="chat" />
                    <label htmlFor="chat">Chat</label>
                  </div>
                  <textarea placeholder="Mark contacted Service Desk as his VPN connection is unstable. He is upset because of this intermittent connection issue. How will you empathize Mark?"></textarea>
                  <a href="#">Add another Question</a>
                </div>
                <div className="form_buttons">
                  <button className="button_save">Save Test</button>
                  <button className="button_cancel">Cancel</button>
                </div>
                    </div>  
            </div>
        </React.Fragment>
    );
}

export default Tests2Admin;