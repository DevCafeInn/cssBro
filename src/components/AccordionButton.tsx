import { useState } from "react";
import { ArrowIcon } from "./Icons";

function AccordionButton({ label, children }) {

    const [ isOpen, setIsOpen ] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`options-container ${isOpen ? "style" : ''}`} onClick={handleClick}>
            <div>
                <button className="options">
                    <span>{label}</span>
                    <ArrowIcon width={16} isOpen={isOpen} />
                </button>
                <div className={isOpen ? "style" : ''}>
                    { isOpen && children }
                </div>
            </div>
        </div>
    )
}

export default AccordionButton;