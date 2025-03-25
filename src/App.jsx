import React from 'react'
import Dashboard from './pages/Dashboard';
import Table from "./components/Table";
import Leaderboard from "./components/Leaderboard";
import StackedExample from './SideNav';
import Clock from './Clock';

export default function App() {
  return (
    <div>
       <StackedExample />
       <Clock/>
       
       <Dashboard/>
       <Table/>
       
    </div>
  )
}