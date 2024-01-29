import React from "react";
import "./style.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="navbar-wrapper">
        <div className="div">
          <div className="text-wrapper">solutions</div>
          <div className="text-wrapper-2">who we are</div>
          <div className="text-wrapper-3">technology</div>
          <div className="text-wrapper-4">careers</div>
          <div className="group">
            <div className="text-wrapper-5">blog</div>
          </div>
          <div className="overlap-group">
            <img className="line" alt="Line" src="https://c.animaapp.com/KAlTT52j/img/line-288.svg" />
            <div className="group-wrapper">
              <div className="div">
                <img className="img" alt="Group" src="https://c.animaapp.com/KAlTT52j/img/group-210@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

