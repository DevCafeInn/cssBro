import { useEffect, useState } from "react";
import { getAllCSSProperties } from "../utils/dom.utils";
import CSSInput from "./atoms/CSSInput/CSSInput";

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
                initialValue={width}
                onChange={
                    (_e) => {
                        // console.log(e);
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
        </div>
    );
}
