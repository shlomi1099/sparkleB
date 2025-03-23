import React from "react";
import "./Dashboard.css";
import Chart from '../pages/Chart'

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header horizontal">
        <div className="header-text">
          <h1>
            שלום <span className="highlight">SEXI</span>,
          </h1>
          <p className="subtext">YOU LOOK WUNDERFULL TODAY</p>
        </div>
        <img
          src="https://i.pravatar.cc/300"
          alt="תמונת פרופיל"
          className="avatar"
        />
      </div>

      {/* Cards */}
      <div className="card-grid horizontal">
        <div className="card">
          <div className="card-content">
            <div className="icon mail"></div>
            <p className="label">MAMASITA</p>
            <p className="value">350</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="icon user"></div>
            <p className="label">SENIORITA</p>
            <p className="value">450</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="icon check"></div>
            <p className="label">YES BABY</p>
            <p className="value">3500</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="icon message"></div>
            <p className="label">SINIMANAA</p>
            <p className="value">3</p>
          </div>
        </div>
      </div>
      <Chart/>

    </div>
  );
}
