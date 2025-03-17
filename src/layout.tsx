"use client"

import { Outlet } from "react-router";
import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import './index.css'


const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="px-10 sm:px-20 py-10"><Outlet /></div>
      </main>
    </SidebarProvider>
  )
}

export default Layout