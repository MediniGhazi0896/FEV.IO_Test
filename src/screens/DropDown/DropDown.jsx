import React from "react";
import { IconDashboardCar } from "../../icons/IconDashboardCar";
import { IconGraphicStitchingThree1 } from "../../icons/IconGraphicStitchingThree1";
import { IconIntersectSelection } from "../../icons/IconIntersectSelection";
import { IconRoad1 } from "../../icons/IconRoad1";
import { IconRobot1 } from "../../icons/IconRobot1"; 
import "./style.css";

export const DropDown = () => {
  return (
    <div className="drop-down">
      <div className="div">
        <img className="line" alt="Line" src="https://c.animaapp.com/9f1eI6Fb/img/line-288.svg" />
        <div className="group">
          <div className="group-2">
            <IconRoad1 className="icon-road" />
            <div className="text-wrapper">ADAS / AD</div>
          </div>
          <div className="group-3">
            <div className="text-wrapper-2">
              Software
              <br />
              Integration
            </div>
            <IconIntersectSelection className="icon-intersect" />
          </div>
          <div className="group-4">
            <div className="text-wrapper-3">Infotainment</div>
            <IconRobot1 className="icon-robot" />
          </div>
          <div className="group-5">
            <div className="systems-engineering">
              Systems
              <br />
              Engineering
            </div>
            <img className="frame" alt="Frame" src="https://c.animaapp.com/9f1eI6Fb/img/frame.svg" />
          </div>
          <div className="group-6">
            <div className="functional-safety">
              Functional
              <br />
              Safety
            </div>
            <img className="img" alt="Group" src="https://c.animaapp.com/9f1eI6Fb/img/group-427321220@2x.png" />
          </div>
          <div className="group-7">
            <div className="connected-mobility">
              Connected
              <br />
              Mobility
            </div>
            <IconDashboardCar className="icon-dashboard-car" />
          </div>
          <div className="group-8">
            <div className="text-wrapper-2">
              Software
              <br />
              Platforms
            </div>
            <IconGraphicStitchingThree1 className="icon-graphic" />
          </div>
        </div>
      </div>
    </div>
  );
};
