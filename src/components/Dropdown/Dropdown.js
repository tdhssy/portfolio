
import { useState } from "react";
import './Dropdown.css'
export function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="dropdown-container">
            <button onClick={() => setIsOpen(!isOpen)}>Projets</button>
            {isOpen && (
                <div className="dropdown-content">
                    <p>Option A</p>
                    <p>Option B</p>
                    <p>Option C</p>
                </div>
            )}
        </div>
    );
}
export default Dropdown;