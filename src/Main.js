import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

export function Main() {

    const [sidebarWidth, setSidebarWidth] = useState(50); // Largeur initiale de la barre latérale

    const handleSidebarResize = (width) => {
        setSidebarWidth(width);
    };

    useEffect(() => {
        // Ce useEffect est déclenché chaque fois que la largeur de la barre latérale change
    }, [sidebarWidth]);

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