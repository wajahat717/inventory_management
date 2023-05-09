import React from 'react'
import SideBar from './sidebar'
import TopBar from  './topbar'
import Category from './category'
const AppLayout = () => {
  return (
    <div>
      <SideBar/>
      <TopBar/>
      <Category/>
    </div>
  )
}

export default AppLayout
