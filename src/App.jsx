import React from 'react'
import Dashboard from './pages/Dashboard';

import Leaderboard from "./components/Leaderboard";
import StackedExample from './SideNav';
export default function App() {
  return (
    <div>
       <StackedExample />
      <Dashboard/>
      <Leaderboard/>
    </div>
  )
}
