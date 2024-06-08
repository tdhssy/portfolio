import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

export function Main() {

    const [sidebarWidth, setSidebarWidth] = useState(50); // Largeur initiale de la barre latérale

    const handleSidebarResize = (width) => {
        setSidebarWidth(width);
    };


    return (
        <>
            <div className="background">
                <Sidebar onSidebarResize={handleSidebarResize}/>
                <div style={{ marginLeft: sidebarWidth }} className="main-content">
                    <Outlet />
                </div>
            </div>
        </>
    );
}