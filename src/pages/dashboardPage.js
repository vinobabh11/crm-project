import React from 'react'
import Board from '../components/board'
import SideNavbar from '../components/sideNavbar'

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