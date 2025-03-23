import React, { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Leaderboard from '../components/Leaderboard';

export default function Chart() {
    let [change, setChange] = useState(2);

    return (
        <div style={{ width: "100vw", display: "flex", justifyContent: "space-between", alignItems: "start", padding: "20px" }}>
            <div style={{ flex: 1, maxWidth: "70%" }}>
                <select style={{ width: "100px", padding: "5px" }} onChange={(val) => setChange(val.target.value)}>
                    <option value="3">today</option>
                    <option value="4">yesterday</option>
                    <option value="1">Thursday</option>
                </select>
                <div style={{ width: "100%" }}>
                    <p>CONVERSATIONS</p>
                    <LineChart
                        xAxis={[{ data: [1, change, 3, 5, 8, 10] }]}
                        series={[
                            { data: [change, 6.6, 8, 8.5, 1.5, 5] },
                            { data: [change, 6.6, 7, 10, 1.5, 2] },
                        ]}
                        width={700}
                        height={300}
                    />
                </div>
            </div>
            <div style={{ flex: "0 0 25%", maxWidth: "25%" }}>
                <Leaderboard />
            </div>
        </div>
    );
}
