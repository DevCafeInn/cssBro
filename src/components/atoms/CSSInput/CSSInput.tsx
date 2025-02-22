import { MouseEventHandler, useRef, useState } from "react";
import "./CSSInput.css";

export type CSSInputProps = {
    initialValue: number | string,
    onChange: (value: number | string) => void,
    leftSlot: any,
    name: string,
    units?: string[],
};

export default function CSSInput({
    initialValue,
    onChange = () => {},
    leftSlot,
    name,
    units = [ 'auto' ],
} : CSSInputProps) {
    const [ value, setValue ] = useState(initialValue);

    const startX = useRef<number>(null);
    const startValue = useRef<string | number>(null);
  
    const handleMouseDown: MouseEventHandler<HTMLSpanElement> = (e) => {
        startX.current = e.clientX;
        startValue.current = value;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseMove = (e: MouseEvent) => {
        if(startX.current === null || startValue.current === null) {
            return;
        }

        const dx = e.clientX - startX.current;
        const newValue = Number(startValue.current) + Math.floor(dx / 1.2);
        setValue(newValue);
        onChange(newValue);
    };
  
    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
  
    const handleChange = (e: any) => {
      const newValue = parseInt(e.target!.value, 10) || 0;
      setValue(newValue);
      onChange(newValue);
    };

    return (
        <div className="css-input">
            <span className="left-icon"
                onMouseDown={handleMouseDown}
            >
                <span className="description">Click and drag to change the { name }</span>
                { leftSlot }
            </span>

            <input
                value={value}
                onChange={handleChange}
            />

            <select>
                {
                    units.map(unit => (
                        <option value={unit}>{unit}</option>
                    ))
                }
            </select>
        </div>
    );
}