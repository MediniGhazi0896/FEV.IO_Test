import React from "react";
import { IconCrossRingTwo1 } from "../../icons/IconCrossRingTwo1";
import "./style.css";
import { Chat } from "../../screens/Chat";

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

          <Chat/>
        </div>
     {/*  <div className="group-9">  
        
          <img className="shape-3" alt="Shape" src="https://c.animaapp.com/wBFcRtRx/img/shape-3.svg" />
        </div> */} 
        <div className="sectionleft">
          <p className="p">
            The world’s leading mobility companies work with us to realize their software mobility goals.
          </p>
          <div className="text-wrapper-3">find your solution</div>
          <p className="mobility-re-done">
            <span className="span">
              mobility (re)done
              <br />
            </span>
            <span className="text-wrapper-4">smarter</span>
          </p>
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="text-wrapper-5"><a id="Link" href="https://www.Google.com">book a demo →</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
