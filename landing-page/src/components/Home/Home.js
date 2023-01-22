import React from "react";
import "./Home.css";
import Topics from "./Topics/Topics";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-header">
          <h1>Education is the key to unlock golder door of freedom.</h1>
        </div>
        <div className="home-banner">
          <div className="home-banner-left">
            <p>Learn to code for free</p>
            <p>practice</p>
            <p>Interview Preparation</p>
          </div>
          <div className="home-banner-right">
            <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" />
          </div>
        </div>

        <div className="home-topics">
          <Topics />
        </div>
      </div>
    </>
  );
}
