import React from "react";
import "./style.css";
import { Chat } from "../../screens/Chat";
import { SectionLeftHalf } from "../SectionLeftHalf/SectionLeftHalf";

export const Section = () => {
  return (
    <div className="section">
      <div className="div">
        <div className="overlap">
          <div className="container">
            <div className="left">
            </div>
            <div className="right">
              <div className="right1"></div>
              <div className="right2"></div>
              <div className="right3"></div>
            </div>
          </div>
          
            <img className="Car" alt="Group" src="https://c.animaapp.com/wBFcRtRx/img/group-427320261.png" />
          <Chat /> {/* Here Is A call For The Chat Component */}
        </div>
        <SectionLeftHalf /> {/* Here Is A call For The Section's LeftHalf Component */}
      </div>
    </div>
  );
};
