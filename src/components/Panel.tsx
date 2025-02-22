import { useEffect, useState } from "react";
import { getAllCSSProperties } from "../utils/dom.utils";
import CSSInput from "./atoms/CSSInput/CSSInput";
import { TwoDValuePicker } from "./atoms/TwoDValuePicker/TwoDValuePicker";

export type PanelProps = {
    element: HTMLElement,
};

export default function Panel({ element }: PanelProps) {
    const [ width, setWidth ] = useState(0);

    useEffect(() => {
        const css = getAllCSSProperties(element);
        const _width = Number((css.width as string).replace('px', ''));

        setWidth(_width);
    }, []);

    return (
        <div style={{
            backgroundColor: '#19191d',
            padding: 50,
        }}>
            <h1>CSS Properties</h1>
            <br />

            <CSSInput
                initialValue={{
                    value: width,
                    unit: 'px',
                }}
                onChange={
                    (_e) => {
                        console.log(_e);
                    }
                }
                leftSlot={ <span>W</span> }
                name="width"
                units={[
                    'auto',
                    'px',
                    '%',
                    'em',
                    'rem',
                    'vw',
                    'vh'
                ]}
            />

            <br/>
            <br/>

            <TwoDValuePicker
                showInnerPicker
                topLeftText="Margin"
                centerText="Padding"
                initialData={{
                    top: {
                        value: 10,
                        unit: 'auto',
                    },
                    bottom: {
                        value: 20,
                        unit: 'auto',
                    },
                    left: {
                        value: 30,
                        unit: 'auto',
                    },
                    right: {
                        value: 40,
                        unit: 'auto',
                    },
                }}
                initialInnerData={{
                    top: {
                        value: 10 + 40,
                        unit: 'auto',
                    },
                    bottom: {
                        value: 20 + 40,
                        unit: 'auto',
                    },
                    left: {
                        value: 30 + 40,
                        unit: 'auto',
                    },
                    right: {
                        value: 40 + 40,
                        unit: 'auto',
                    },
                }}
                onChange={console.log}
            />
        </div>
    );
}
