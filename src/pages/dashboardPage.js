import React from 'react'
import Board from '../components/dashboard/board'
import SideNavbar from '../components/navbar/sideNavbar'

const DashboardPage = () => {
  return (
    <div className='dashBoard'>
      <SideNavbar/>
      <div className='dash'>
        <Board/>
      </div>
    </div>
  )
}

export default DashboardPage