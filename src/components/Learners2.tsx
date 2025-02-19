import { default as React, useState } from "react";
import {Search} from "lucide-react"
import MainLayout from "./MainLayout";
import '../css/Learners2.css';

const Learners2: React.FC = () => {
  return (
    <div className="learners2">
      <div className="learners2_content">
        <div className="learners2_header">
          <p>Learners</p>
        </div>
        
        <div className="Card">
          <div className="card-container">
            <div className="card-content">
              <form>
                <div className="form-grid">
                  <label className="card_label">First Name</label>
                  <input 
                    type="text" 
                    id="first_name" 
                    placeholder="First Name" 
                    className="form-input"
                  />
                  
                  <label className="card_label">Last Name</label>
                  <input 
                    type="text" 
                    id="last_name" 
                    placeholder="Last Name" 
                    className="form-input"
                  />
                  
                  <label className="card_label">Email id</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email id" 
                    className="form-input"
                  />
                  
                  <label className="card_label">Account</label>
                  <input 
                    type="text" 
                    id="account" 
                    placeholder="Account" 
                    className="form-input"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <button className="card_cancel">Cancel</button>
              <button className="card_create">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learners2;