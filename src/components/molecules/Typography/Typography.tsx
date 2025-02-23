import Select from 'react-select';

import './Typography.css';
import CSSInput, { Value } from '../../atoms/CSSInput/CSSInput';
import { FontSizeIcon, LineHeightIcon } from '../../Icons';
import { useEffect, useState } from 'react';

const fonts = [
    {
        value: 'Roboto',
        label: 'Roboto',
        familyName: '"Roboto", serif',
        urls: [
            {
                fontStyle: "italic",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkC3kaSTbQWt4N.woff2",
            },
            {
                fontStyle: "italic",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkAnkaSTbQWt4N.woff2",
              },
              {
                fontStyle: "italic",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkCnkaSTbQWt4N.woff2",
              },
              {
                fontStyle: "italic",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkBXkaSTbQWt4N.woff2",
              },
              {
                fontStyle: "italic",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkenkaSTbQWt4N.woff2",
              },
              {
                fontStyle: "italic",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkaHkaSTbQWt4N.woff2",
              },
              {
                fontStyle: "italic",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkCXkaSTbQWt4N.woff2",
              },
              {
                fontStyle: "italic",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkCHkaSTbQWt4N.woff2",
              },
              {
                fontStyle: "italic",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkBnkaSTbQWg.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBHMdazTgWw.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBHMdazTgWw.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBHMdazTgWw.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBHMdazTgWw.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBHMdazTgWw.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBHMdazTgWw.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBHMdazTgWw.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBHMdazTgWw.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: "100 900",
                url: "https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2",
              }
        ]
    },
    {
        value: 'Sigmar',
        label: 'Sigmar',
        familyName: '"Sigmar", serif',
        urls: [
            {
                fontStyle: "normal",
                fontWeight: 400,
                url: "https://fonts.gstatic.com/s/sigmar/v7/hv-XlzJgIE8a85pkZWw2EzJwV9J-.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: 400,
                url: "https://fonts.gstatic.com/s/sigmar/v7/hv-XlzJgIE8a85pkZGw2EzJwV9J-.woff2",
              },
              {
                fontStyle: "normal",
                fontWeight: 400,
               url: "https://fonts.gstatic.com/s/sigmar/v7/hv-XlzJgIE8a85pkamw2EzJwVw.woff2",
              }
        ]
    }
];


export type TypographyProps = {
    parentData: {
        width: number,
        height: number,
    },
    fontFamily: string,
    fontWeight: string,
    fontSize: Value,
    fontColor: string,
    lineHeight: Value,
    element: HTMLElement,
    onFontChange: (fontSize: Value, fontFamily: string) => void
};

export default function Typography({
    parentData,
    fontFamily,
    fontWeight,
    fontSize,
    fontColor,
    lineHeight,
    element,
    onFontChange,
}: TypographyProps) {
    console.log({fontWeight});
    const [ fWeight, setFWeight ] = useState(fontWeight);
    const [ fSize, setFSize ] = useState(fontSize);
    const [ fFamily, setFFamily ] = useState(fontFamily);
    const [ fColor, setFColor ] = useState(fontColor);
    

    const selectedFont = fonts.find(font => font.label === fontFamily);

    useEffect(() => {
        fonts.forEach(font => {
            font.urls.forEach(url => {
                const fontFace = new FontFace(font.value, `url(${url.url})`, {
                    style: url.fontStyle,
                    weight: url.fontWeight + '',
                });
                document.fonts.add(fontFace);
                fontFace.load().then(() => {
                    console.log(`${font.value} loaded from ${url}`);
                }).catch(err => {
                    console.error(`Failed to load ${font.value} from ${url}:`, err);
                });
            });
        });
    }, [])

    return (
        <div className="typography-container">
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={selectedFont}
                onChange={(value) => {
                    if(value) {
                        element.style.fontFamily = value.familyName;
                        setFFamily(value.familyName);
                        onFontChange(fSize, value.familyName);
                    }
                }}
                isSearchable
                name="name"
                options={fonts}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: '#1a1a1d',
                        border: state.menuIsOpen ? '1px solid #CCC': 'none',
                        outline: state.menuIsOpen ? '1px solid #CCC': 'none',
                    }),
                    singleValue: (baseStyles) => ({
                        ...baseStyles,
                        color: '#FFF'
                    }),
                    menu: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: '#2C2C2F'
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isFocused ? '#94e3af' : '#2C2C2F',
                        color: state.isFocused ? '#222' : '#FFF',
                    }),
                }}
            />

            <div className="grid">
                <label className='select-control'>
                    <select value={fWeight} onChange={(e) => {
                        const weight = e.target.value;

                        setFWeight(weight);
                        element.style.fontWeight = weight;
                    }}>
                        <option value="100">100 - Thin</option>
                        <option value="200">200 - Extra Light</option>
                        <option value="300">300 - Light</option>
                        <option value="400" selected>400 - Normal</option>
                        <option value="500">500 - Medium</option>
                        <option value="600">600 - Semi Bold</option>
                        <option value="700">700 - Bold</option>
                        <option value="800">800 - Extra Bold</option>
                        <option value="900">900 - Black</option>
                    </select>
                </label>

                <CSSInput
                    leftSlot={<FontSizeIcon />}
                    initialValue={fontSize}
                    name='font-size'
                    parentData={parentData}
                    onChange={(value) => {
                        element.style.fontSize = `${value.value}${value.unit}`;
                        onFontChange(value, fFamily);
                        setFSize(value);
                    }}
                />

                <div className="color-picker-wrapper">
                    <input type="color" id="colorInput" value={fColor} onChange={(e) => {
                        const color = e.target.value;

                        setFColor(color);
                        element.style.color = color;
                    }} />
                    <label style={{display: 'flex', gap: 8, alignItems: 'center'}} htmlFor='colorInput'>
                        <div style={{backgroundColor: fColor}} className="color-display"></div>
                        <span>{ fColor }</span>
                    </label>
                </div>

                {/* <CSSInput
                    leftSlot={<LineHeightIcon />}
                    initialValue={lineHeight}
                    name='line-height'
                    parentData={parentData}
                    onChange={(value) => {
                        element.style.lineHeight = `${value.value}${value.unit}`;
                    }}
                /> */}
            </div>
        </div>
    );
}