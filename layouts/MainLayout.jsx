import React from 'react'
import AboveTheFold from '../components/AboveTheFold'

const MainLayout = ({children}) => {
  return (
    <div className='container content'>
      <AboveTheFold/>
      {children}
    </div>
  )
}

export default MainLayout