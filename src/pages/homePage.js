import React from 'react'
import LogIn from '../components/logIn'

const HomePage = () => {
  return (
    <div className='homepage'>
        <div className='shaded'>CRM Project <br/> by <br/> Vinoba Bhardwaj</div>
        <div className='login'>
            <LogIn/>
        </div>
    </div>
  )
}

export default HomePage