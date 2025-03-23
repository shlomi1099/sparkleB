import React from 'react'
import Dashboard from './pages/Dashboard';
import Table from "./components/Table";
import Leaderboard from "./components/Leaderboard";
import StackedExample from './SideNav';
export default function App() {
  return (
    <div>
       <StackedExample />
       <Dashboard/>
       <Table/>
    </div>
  )
}