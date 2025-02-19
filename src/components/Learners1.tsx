import { default as React, useState } from "react";
import {Search} from "lucide-react"
import MainLayout from "./MainLayout";
import '../css/Learners1.css';
import { useNavigate } from "react-router-dom";

const Learners1: React.FC = () => {

  const navigate = useNavigate();

  const handleNavigateToLearners2 = () => {
      navigate('/main/learners2');
    };

  return (
    <div className="learners1">
        
            <div className="learners1_content">
                <div className="learners1_header">
                    <p>Learners</p>
                </div>
                <div className="learners1_search">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                    />
                    <div className="learners1_buttons">
                     <button className="learners_add" onClick={handleNavigateToLearners2}>Add New Learner</button>
                     <button className="learners_bulk">Bulk learner upload</button>
                    </div>
                  </div>
                

                <div className="learners1-table">
                    <table>
                            <thead>
                                <tr>
                                <th>SI#</th>
                                <th>Name</th>
                                <th>Email id</th>
                                <th>Account</th>
                                <th>Author</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Andrew Jhonston</td>
                                <td>Andrew.Johnston@dxc.com</td>
                                <td>HPE</td>
                                <td>John Doe</td>
                                <td>
                                    <button> Edit</button>
                                </td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Anna Atkinsons</td>
                                <td>Anna.Atkinsons@dxc.com</td>
                                <td>HPE</td>
                                <td>John doe</td>
                                <td>Passed</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Anna Atkinsons</td>
                                <td>Mark.Atkinsons@dxc.com</td>
                                <td>HPE</td>
                                <td>John Doe</td>
                                <td>NA</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        
    </div>
  )
}

export default Learners1;