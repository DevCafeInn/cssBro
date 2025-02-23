import { useState } from "react";
import { getAllCSSProperties } from "../utils/dom.utils";
import CSSInput, { Value } from "./atoms/CSSInput/CSSInput";
import { TwoDValuePicker } from "./atoms/TwoDValuePicker/TwoDValuePicker";
import { AngleIcon, BorderRadiusIcon, CopyIcon, DimensionIcon, FontIcon, ResetIcon, WrongIcon } from './Icons.tsx'
import AccordionButton from "./AccordionButton.tsx";
import Typography from "./molecules/Typography/Typography.tsx";
import { rgbToHex } from "../utils/functions.utils.ts";

export type PanelProps = {
    element: HTMLElement,
};

export default function Panel({ element }: PanelProps) {
    const [ _fontStyles, setFontStyles ] = useState({
        fontSize: {
            value: 0,
            unit: 'px'
        },
        fontFamily: '',
    });

    const css = getAllCSSProperties(element);
    
    let parentWidth = 0;
    let parentHeight = 0;

    if(element.parentElement) {
        const parentCSSProperties = getAllCSSProperties(element.parentElement);
        parentWidth = Number(parentCSSProperties.width.toString().replace('px', ''));
        parentHeight = Number(parentCSSProperties.height.toString().replace('px', ''));
    }

    const parentData = {
        width: parentWidth,
        height: parentHeight,
    }


    let title = element.tagName.toLowerCase();

    if(element.id) {
        title += ` #${element.id}`;
    }

    if(element.classList.length > 0) {
        title += ' ';
        element.classList.forEach(className => {
            title += `.${className}`;
        })
    }

    const dimensions = element.clientWidth + ' x ' + element.clientHeight;
    const fontFamily = css['font-family']?.toString()?.split(',')[0]?.replace(/"/g, '')
    const fontSize = css['font-size'];
    const fontSizeValue = {
        value: fontSize?.toString()?.replace('px', '') || 0,
        unit: 'px'
    };
    const fontWeight = css['font-weight'] || 'normal';
    const fontColor = rgbToHex(css['color']?.toString()) || '#000';

    // const lineHeight = css['line-height'];
    // const lineHeightValue = {
    //     value: lineHeight?.toString()?.replace('px', '') || 0,
    //     unit: 'px'
    // };

    const x = element.offsetLeft;
    const y = element.offsetTop;

    const width = Number(css['width']?.toString()?.replace('px', '')) || 0;
    const height = Number(css['height']?.toString()?.replace('px', '')) || 0;

    const borderRadius = Number(css['border-radius']?.toString()?.replace('px', '')) || 0;

    return (
        <div id="panel-container">
            <div className="top-container">
                <div className="header">
                    <span className="title">{title}</span>
                    <div className="pinned-controls">
                        <div className='icon-hover-container'> <ResetIcon width={13} /> <span className='tooltip'>Reset CSS changes</span> </div>
                        <div className='icon-hover-container'> <CopyIcon width={13}  /> <span className='tooltip'>Copy to clipboard</span> </div>
                        <div className='icon-hover-container'> <WrongIcon width={9} /> <span className='tooltip'>Close window</span> </div>
                    </div>
                </div>

                <div className="dimensions">
                    <DimensionIcon width={14} />
                    <span>{dimensions}</span>
                </div>

                <div className="font-details">
                    <FontIcon width={12} />
                    <span> 
                        <a href='#'>{fontFamily}<span className='tooltip'>Click to search font on google</span></a> {fontSize}
                        
                    </span>
                </div>
            </div>


            <div className="sub-container">
                <div className="properties">
                    <CSSInput
                        key={x}
                        initialValue={{value: x, unit: 'px'}}
                        leftSlot={<span>X</span>}
                        name="x"
                        onChange={() => {}}
                        parentData={parentData}
                        isDisabled
                    />

                    <CSSInput
                        key={y}
                        initialValue={{value: y, unit: 'px'}}
                        leftSlot={<span>Y</span>}
                        name="y"
                        onChange={() => {}}
                        parentData={parentData}
                        isDisabled
                    />

                    <CSSInput
                        initialValue={{value: 0, unit: 'º'}}
                        leftSlot={<AngleIcon />}
                        name="rotation"
                        onChange={(value) => element.style.transform = `rotate(${value.value}deg)`}
                        parentData={parentData}
                        units={['º']}
                    />

                    <CSSInput
                        key={'w'+width}
                        initialValue={{value: width, unit: 'px'}}
                        leftSlot={<span>W</span>}
                        name="width"
                        onChange={(value) => element.style.width = `${value.value}${value.unit}`}
                        parentData={parentData}
                        units={['auto', 'px', '%', 'em', 'rem', 'vw', 'vh']}
                    />

                    <CSSInput
                        key={'h'+height}
                        initialValue={{value: height, unit: 'px'}}
                        leftSlot={<span>H</span>}
                        name="height"
                        onChange={(value) => element.style.height = `${value.value}${value.unit}`}
                        parentData={parentData}
                        units={['auto', 'px', '%', 'em', 'rem', 'vw', 'vh']}
                    />

                    <CSSInput
                        key={'br'+borderRadius}
                        initialValue={{value: borderRadius, unit: 'px'}}
                        leftSlot={<BorderRadiusIcon />}
                        name="border-radius"
                        onChange={(value) => element.style.borderRadius = `${value.value}${value.unit}`}
                        parentData={parentData}
                        units={['auto', 'px', '%', 'em', 'rem', 'vw', 'vh']}
                    />
                </div>


                <AccordionButton label={"Spacing"}>
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
                                value: Number(css['margin-top']?.toString()?.replace('px', '')),
                                unit: 'auto',
                            },
                            bottom: {
                                value: Number(css['margin-bottom']?.toString()?.replace('px', '')),
                                unit: 'auto',
                            },
                            left: {
                                value: Number(css['margin-left']?.toString()?.replace('px', '')),
                                unit: 'auto',
                            },
                            right: {
                                value: Number(css['margin-right']?.toString()?.replace('px', '')),
                                unit: 'auto',
                            },
                        }}
                        initialInnerData={{
                            top: {
                                value: Number(css['padding-top']?.toString()?.replace('px', '')),
                                unit: 'auto',
                            },
                            bottom: {
                                value: Number(css['padding-bottom']?.toString()?.replace('px', '')),
                                unit: 'auto',
                            },
                            left: {
                                value: Number(css['padding-left']?.toString()?.replace('px', '')),
                                unit: 'auto',
                            },
                            right: {
                                value: Number(css['padding-right']?.toString()?.replace('px', '')),
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
                </AccordionButton>
                
                <AccordionButton label={"Typography"}>
                    <Typography
                        element={element}
                        parentData={parentData}
                        fontSize={fontSizeValue as Value}
                        fontWeight={fontWeight.toString()}
                        fontFamily={fontFamily || 'Roboto'}
                        fontColor={fontColor.toString()}
                        // lineHeight={lineHeightValue}
                        onFontChange={(fontSize: Value, fontFamily: string) => {
                            setFontStyles({
                                fontSize,
                                fontFamily,
                            });
                        }}
                    />
                </AccordionButton>
                
                <AccordionButton label={"Background"}>
                    <div>Background</div>
                </AccordionButton>

                <AccordionButton label={"Display"}>
                    <div>Display</div>
                </AccordionButton>

                <AccordionButton label={"Border"}>
                    <div>Border</div>
                </AccordionButton>

                <AccordionButton label={"Positioning"}>
                    <div>Positioning</div>
                </AccordionButton>

                <AccordionButton label={"Box shadow"}>
                    <div>Box shadow</div>
                </AccordionButton>

                <AccordionButton label={"Text shadow"}>
                    <div>Text shadow</div>
                </AccordionButton>

                <AccordionButton label={"Filters"}>
                    <div>Filters</div>
                </AccordionButton>
            </div>

        </div>
    );
}
