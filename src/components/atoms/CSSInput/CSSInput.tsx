import { MouseEventHandler, useRef, useState } from "react";
import "./CSSInput.css";
import { calculateNewValue, DragDirection } from "../../../utils/functions.utils";

export type Value = {
    value: number,
    unit: string, // TODO: Limit the strings
};

export type CSSInputProps = {
    initialValue: Value,
    onChange: (value: Value) => void,
    leftSlot?: any,
    name: string,
    units?: string[],
    className?: string,
    dragDirection?: DragDirection,
};

export default function CSSInput({
    initialValue,
    onChange = () => {},
    leftSlot,
    name,
    units = [ 'auto' ],
    className,
    dragDirection = 'horizontal-ltr',
} : CSSInputProps) {
    const [ value, setValue ] = useState(initialValue);
    const [ selectedUnit, setSelectedUnit ] = useState<string>('auto');

    const startX = useRef<number>(null);
    const startY = useRef<number>(null);
    const startValue = useRef<string | number>(null);
  
    const handleMouseDown: MouseEventHandler<HTMLSpanElement> = (e) => {
        startX.current = e.clientX;
        startY.current = e.clientY;
        startValue.current = value.value;

        document.body.style.pointerEvents = 'none';

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseMove = (e: MouseEvent) => {
        if(startX.current === null || startY.current === null || startValue.current === null) {
            return;
        }

        const delta = 
            dragDirection.startsWith('horizontal') 
                ? e.clientX - startX.current 
                : e.clientY - startY.current;

        const newValue = calculateNewValue(Number(startValue.current), delta, dragDirection);

        setValue({
            value: newValue,
            unit: selectedUnit,
        });
        onChange({
            value: newValue,
            unit: selectedUnit,
        });
    };
  
    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.pointerEvents = 'auto';
    };
  
    const handleChange = (e: any) => {
      const newValue = parseInt(e.target!.value, 10) || 0;
      setValue({
        value: newValue,
        unit: selectedUnit,
    });
    onChange({
        value: newValue,
        unit: selectedUnit,
    });
    };

    return (
        <div
            className={"css-input " + (className || '')}
            onMouseDown={
                !leftSlot ? handleMouseDown : undefined
            }
            style={{
                cursor: dragDirection.startsWith('horizontal') ? 'ew-resize': 'ns-resize',
            }}
        >
            {
                !leftSlot
                ? <span className="description">Click and drag to change the { name }</span>
                : null
            }
            {
                leftSlot
                ? (
                    <span
                        className="left-icon"
                        onMouseDown={handleMouseDown}
                        style={{
                            cursor: dragDirection.startsWith('horizontal') ? 'ew-resize': 'ns-resize',
                        }}
                    >
                        <span className="description">Click and drag to change the { name }</span>
                        { leftSlot }
                    </span>
                )
                : null
            }

            <input
                value={value.value}
                onChange={handleChange}
            />

            <select
                value={selectedUnit}
                onChange={(e: any) => {
                    const unit = e.target.value;
                    setSelectedUnit(unit);
                    onChange({
                        value: value.value,
                        unit: unit,
                    });
                }}
            >
                {
                    units.map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))
                }
            </select>
        </div>
    );
}