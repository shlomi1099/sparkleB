import React, { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Leaderboard from '../components/Leaderboard';

export default function Chart() {
  const [change, setChange] = useState(2);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "40px",
        width: "100vw",             // 📌 תופס את כל המסך
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* גרף */}
      <div style={{ flex: 1 }}>
        <select
          style={{
            width: "100px",
            padding: "5px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
          onChange={(val) => setChange(val.target.value)}
        >
          <option value="3">today</option>
          <option value="4">yesterday</option>
          <option value="1">Thursday</option>
        </select>

        <div style={{ width: "100%", height: "300px" }}>
          <p style={{ marginBottom: "10px", fontWeight: "bold" }}>CONVERSATIONS</p>
          <LineChart
            xAxis={[{ data: [1, change, 3, 5, 8, 10] }]}
            series={[
              { data: [change, 6.6, 8, 8.5, 1.5, 5] },
              { data: [change, 6.6, 7, 10, 1.5, 2] },
            ]}
            width={window.innerWidth - 420}  // 👈 זה עושה את הקסם
            height={300}
          />
        </div>
      </div>

      {/* Leaderboard */}
      <div style={{ flex: "0 0 300px" }}>
        <Leaderboard />
      </div>
    </div>
  );
}
