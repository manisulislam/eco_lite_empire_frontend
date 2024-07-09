import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar/Sidebar ";
import Navbar from './Navbar';
const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
       
        <div className="flex h-screen overflow-hidden">
        
        <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
        <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
        
        <main className="flex-1 p-4 overflow-y-auto">
            <Outlet />
        </main>
        </div>
    </div>
    </>
    
  )
}

export default DashboardLayout