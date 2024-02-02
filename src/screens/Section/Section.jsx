import React from "react";
import { IconCrossRingTwo1 } from "../../icons/IconCrossRingTwo1";
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
          <IconCrossRingTwo1 className="icon-cross-ring-two" />
          <img className="group-3" alt="Group" src="https://c.animaapp.com/wBFcRtRx/img/group-427320261.png" />
          <Chat/> {/* Here Is A call For The Chat Component */}
        </div>
        <SectionLeftHalf/>
      </div>
    </div>
  );
};
