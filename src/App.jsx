import React from 'react'
import Chart from './pages/Chart'
import Dashboard from './pages/Dashboard';

import Leaderboard from "./components/Leaderboard";
import StackedExample from './SideNav';
export default function App() {
  return (
    <div>
       <StackedExample />
      <Chart/>
      <Dashboard/>
      <Leaderboard/>
    </div>
  )
}
