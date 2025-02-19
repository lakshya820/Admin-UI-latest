import * as io from "socket.io-client";
import { default as React, useState } from "react";
import MainLayout from "./MainLayout";
import Header from "./Header";
import '../css/Tests1Admin.css';
import { useNavigate } from "react-router-dom";

const Tests1Admin: React.FC = () => {
    
    const navigate = useNavigate();

    const handleNavigateToTests2 = () => {
        // Perform login logic here
        navigate('/main/tests2');
      };
    
    return (
        <React.Fragment>
            <div className="tests1_admin">
                    <div className="tests1_admin_header">
                        <p>Tests</p>
                    </div>
                    <div className="tests1_admin_buttons">
                        <button className="card_button_start" onClick={handleNavigateToTests2}>Create a new Test</button>
                        <button className="card_button_start">Bulk Questions</button>
                    </div>
                    <div className="tests1_admin_table">
                        <table>
                            <thead>
                                <tr>
                                <th>SI#</th>
                                <th>Test Name</th>
                                <th>Questions</th>
                                <th>Learners</th>
                                <th>Creation Date</th>
                                <th>Test date and time</th>
                                <th>Author</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Voice</td>
                                <td>15</td>
                                <td>5</td>
                                <td>15/12/2023</td>
                                <td>15/12/2023 - 13:00</td>
                                <td>John Doe</td>
                                <td>
                                     <button className="button">Edit</button>
                                     <button className="button">Delete</button>
                                     <button className="button">Clone</button>
                                     <button className="button">Assign</button>
                                </td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Chat</td>
                                <td>15</td>
                                <td>5</td>
                                <td>13/11/2023</td>
                                <td>13/11/2023 - 11:00</td>
                                <td>John Doe</td>
                                <td>
                                     <button className="button">Edit</button>
                                     <button className="button">Delete</button>
                                     <button className="button">Clone</button>
                                     <button className="button">Assign</button>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                
          </div>
        </React.Fragment>
    );
}

export default Tests1Admin;