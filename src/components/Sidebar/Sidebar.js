import './Sidebar.css'
import { FiChevronsLeft, FiChevronsRight  } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import ContentSidebar from './contentSidebar';
import IconContentSidebar from './IconContentSidebar';

export function Sidebar({ onSidebarResize }) {
    
    const sidebarRef = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            if (entries[0].target === sidebarRef.current) {
                const sidebarWidth = entries[0].contentRect.width;
                onSidebarResize(sidebarWidth);
            }
        });
        resizeObserver.observe(sidebarRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [onSidebarResize]);
    
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiChevronsLeft/> : <FiChevronsRight/>}
            </button>
            <div className="content">
                {isOpen ?
                    <ContentSidebar/> : <IconContentSidebar/>
                }
            </div>
        </div>
    );
}
export default Sidebar;
