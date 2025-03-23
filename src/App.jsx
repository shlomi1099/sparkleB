import React from 'react'
import Chart from './pages/Chart'
import Leaderboard from "./components/Leaderboard";
import StackedExample from './SideNav';

export default function App() {
  return (
    <div>
       <StackedExample />
      <Chart/>
      <Leaderboard/>
    </div>
  )
}
