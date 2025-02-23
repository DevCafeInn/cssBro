import { MouseEventHandler, useRef, useState, useEffect, useCallback, JSX } from "react";
import "./CSSInput.css";
import { calculateNewValue, convertUnits, DragDirection } from "../../../utils/functions.utils";

export type Value = {
    value: number,
    unit: string,
};

export type CSSInputProps = {
    initialValue: Value,
    onChange: (value: Value) => void,
    leftSlot?: JSX.Element,
    name: string,
    units?: string[],
    className?: string,
    dragDirection?: DragDirection,
    parentData: {
        width: number,
        height: number,
    }
};

export default function CSSInput({
    initialValue,
    onChange,
    leftSlot,
    name,
    units = ['auto'],
    className = '',
    dragDirection = 'horizontal-ltr',
    parentData,
}: CSSInputProps) {
    const [value, setValue] = useState(initialValue);

    const startX = useRef<number | null>(null);
    const startY = useRef<number | null>(null);
    const startValue = useRef<number | null>(null);

    const updateValue = useCallback((newValue: number, unit: string) => {
        const updatedValue = {
            value: newValue,
            unit: unit === 'auto' ? 'px' : unit,
        };
        setValue(updatedValue);
        onChange(updatedValue);
    }, [onChange]);

    const handleMouseDown: MouseEventHandler<HTMLSpanElement> = useCallback((e) => {
        startX.current = e.clientX;
        startY.current = e.clientY;
        startValue.current = value.value;

        document.body.style.pointerEvents = 'none';

        const handleMouseMove = (e: MouseEvent) => {
            if (startX.current === null || startY.current === null || startValue.current === null) return;

            const delta = dragDirection.startsWith('horizontal')
                ? e.clientX - startX.current
                : e.clientY - startY.current;

            const newValue = calculateNewValue(Number(startValue.current), delta, dragDirection);
            updateValue(newValue, value.unit);
        };

        const handleMouseUp = () => {
            document.body.style.pointerEvents = 'auto';
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [dragDirection, updateValue, value.unit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10) || 0;
        updateValue(newValue, value.unit);
    };

    const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const unit = e.target.value;
        if (unit === 'auto') {
            setValue(prevValue => ({
                ...prevValue,
                unit
            }));
            return;
        }

        const oldUnit = value.unit === 'auto' ? 'px' : value.unit;
        const newValue = convertUnits(oldUnit, unit, value.value, parentData.width);
        updateValue(newValue, unit);
    };

    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', handleMouseDown as any);
            document.removeEventListener('mouseup', handleMouseDown as any);
        };
    }, [handleMouseDown]);

    const cursorStyle = dragDirection.startsWith('horizontal') ? 'ew-resize' : 'ns-resize';

    return (
        <div
            className={`css-input ${className}`}
            onMouseDown={!leftSlot ? handleMouseDown : undefined}
            style={{ cursor: cursorStyle }}
        >
            {!leftSlot && (
                <span className="description">
                    Click and drag to change the {name}
                </span>
            )}

            {leftSlot && (
                <span className="left-icon" onMouseDown={handleMouseDown} style={{ cursor: cursorStyle }}>
                    <span className="description">
                        Click and drag to change the {name}
                    </span>
                    {leftSlot}
                </span>
            )}

            {value.unit !== 'auto' && (
                <input
                    value={value.value || 0}
                    onChange={handleChange}
                />
            )}

            <select value={value.unit} onChange={handleUnitChange}>
                {units.map(unit => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>
        </div>
    );
}