import { MouseEventHandler, PropsWithChildren, useState } from "react";
import { ArrowIcon } from "./Icons";

export type AccordionButtonProps = PropsWithChildren & {
    label: string
};

function AccordionButton({ label, children }: AccordionButtonProps) {

    const [ isOpen, setIsOpen ] = useState(false);

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if((e.target as HTMLDivElement).closest('button.options')) {
            setIsOpen(!isOpen);
        }
    }

    return (
        <div className={`options-container ${isOpen ? "style" : ''}`} onClick={handleClick}>
            <button className="options">
                <span>{label}</span>
                <ArrowIcon width={16} isOpen={isOpen} />
            </button>
            <div className={isOpen ? "child" : ''}>
                {
                    isOpen
                    ? children
                    : null
                }
            </div>
        </div>
    )
}

export default AccordionButton;