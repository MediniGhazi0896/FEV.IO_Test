import React from "react";
import "./style.css";
import { Chat } from "../../screens/Chat";
import { SectionLeftHalf } from "../SectionLeftHalf/SectionLeftHalf";

export const Section = () => {
  return (
    <div className="section">
      <div className="div">
        <div className="overlap">
          <div class="container">
            <div class="left">
            </div>
            <div class="right">
          
            <div class="right1"></div>
              <div class="right2"></div>
              <div class="right3"></div>
            </div>
          </div>
          <div class="road">
          <img className="Car" alt="Group" src="https://c.animaapp.com/wBFcRtRx/img/group-427320261.png" />
          </div>
          <Chat/> {/* Here Is A call For The Chat Component */}
        </div>
        <SectionLeftHalf/>
      </div>
    </div>
  );
};
