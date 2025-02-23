import { useEffect, useState } from "react";
import { getAllCSSProperties } from "../utils/dom.utils";
import CSSInput, { Value } from "./atoms/CSSInput/CSSInput";
import { TwoDValuePicker } from "./atoms/TwoDValuePicker/TwoDValuePicker";

export type PanelProps = {
    element: HTMLElement,
};

export default function Panel({ element }: PanelProps) {
    const [ css, setCSS ] = useState<Record<string, any>>({});
    const [ parentData, setParentData ] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if(element.parentElement) {
            const parentCSSProperties = getAllCSSProperties(element.parentElement);
            const parentWidth = Number(parentCSSProperties.width.toString().replace('px', ''));
            const parentHeight = Number(parentCSSProperties.height.toString().replace('px', ''));

            setParentData({
                width: parentWidth,
                height: parentHeight,
            });
        }

        setCSS(getAllCSSProperties(element));
    }, []);

    return (
        <div style={{
            backgroundColor: '#19191d',
            padding: 50,
        }}>
            <h1>CSS Properties</h1>
            <br />

            <CSSInput
                key={JSON.stringify([css.width, JSON.stringify(parentData)])}
                parentData={parentData}
                initialValue={{
                    value: Number(css.width?.replace('px', '')),
                    unit: 'px',
                }}
                onChange={(value) => {
                    const width = value.value;
                    
                    if(!isNaN(width)) {
                        element.style.width = width + value.unit;
                    }
                }}
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
                key={JSON.stringify([
                    css['margin-top'],
                    css['margin-bottom'],
                    css['margin-left'],
                    css['margin-right'],
                    css['padding-top'],
                    css['padding-bottom'],
                    css['padding-left'],
                    css['padding-right'],
                ])}
                parentData={parentData}
                showInnerPicker
                topLeftText="Margin"
                centerText="Padding"
                initialData={{
                    top: {
                        value: Number(css['margin-top']?.replace('px', '')),
                        unit: 'auto',
                    },
                    bottom: {
                        value: Number(css['margin-bottom']?.replace('px', '')),
                        unit: 'auto',
                    },
                    left: {
                        value: Number(css['margin-left']?.replace('px', '')),
                        unit: 'auto',
                    },
                    right: {
                        value: Number(css['margin-right']?.replace('px', '')),
                        unit: 'auto',
                    },
                }}
                initialInnerData={{
                    top: {
                        value: Number(css['padding-top']?.replace('px', '')),
                        unit: 'auto',
                    },
                    bottom: {
                        value: Number(css['padding-bottom']?.replace('px', '')),
                        unit: 'auto',
                    },
                    left: {
                        value: Number(css['padding-left']?.replace('px', '')),
                        unit: 'auto',
                    },
                    right: {
                        value: Number(css['padding-right']?.replace('px', '')),
                        unit: 'auto',
                    },
                }}
                onChange={(margin, padding) => {
                    console.log(margin.top.value + margin.top.unit);
                    element.style.marginTop = margin.top.value + margin.top.unit;
                    element.style.marginBottom = margin.bottom.value + margin.bottom.unit;
                    element.style.marginLeft = margin.left.value + margin.left.unit;
                    element.style.marginRight = margin.right.value + margin.right.unit;

                    element.style.paddingTop = padding.top.value + padding.top.unit;
                    element.style.paddingBottom = padding.bottom.value + padding.bottom.unit;
                    element.style.paddingLeft = padding.left.value + padding.left.unit;
                    element.style.paddingRight = padding.right.value + padding.right.unit;
                }}
            />
        </div>
    );
}
