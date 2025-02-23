import { useState } from 'react';
import CSSInput, { Value } from '../CSSInput/CSSInput';
import './TwoDValuePicker.css';

export type ValueSet = {
    top: Value,
    bottom: Value,
    left: Value,
    right: Value,
};

export type TwoDValuePickerProps = {
    topLeftText?: string,
    centerText?: string,
    showInnerPicker?: boolean,
    initialData?: ValueSet,
    initialInnerData?: ValueSet,
    onChange?: (data: ValueSet, innerData: ValueSet) => void,
    parentData: {
        width: number,
        height: number,
    }
};

export function TwoDValuePicker({
    topLeftText,
    centerText,
    showInnerPicker = false,
    initialData = {
        top: {
            value: 0,
            unit: 'auto'
        },
        bottom: {
            value: 0,
            unit: 'auto'
        },
        left: {
            value: 0,
            unit: 'auto'
        },
        right: {
            value: 0,
            unit: 'auto'
        },
    },
    initialInnerData = {
        top: {
            value: 0,
            unit: 'auto'
        },
        bottom: {
            value: 0,
            unit: 'auto'
        },
        left: {
            value: 0,
            unit: 'auto'
        },
        right: {
            value: 0,
            unit: 'auto'
        },
    },
    onChange = (_, __) => {},
    parentData,
}: TwoDValuePickerProps) {
    const [ data, setData ] = useState(initialData);
    const [ innerData, setInnerData ] = useState(initialInnerData);

    return (
        <div className="two-d-value-container">
            <div className='two-d-value-picker'>
                <CSSInput
                    parentData={parentData}
                    initialValue={initialData.top}
                    name='margin-top'
                    onChange={(value: Value) => {
                        setData((data) => {
                            const updatedData = {
                                ...data,
                                top: value,
                            }
                            onChange(updatedData, innerData);
                            return  updatedData;
                        });
                    }}
                    units={['auto', 'px', '%']}
                    className='top picker compact'
                    dragDirection='vertical-ttb'
                />

                <CSSInput
                    parentData={parentData}
                    initialValue={initialData.bottom}
                    name='margin-bottom'
                    onChange={(value: Value) => {
                        setData((data) => {
                            const updatedData = {
                                ...data,
                                bottom: value,
                            }
                            onChange(updatedData, innerData);
                            return  updatedData;
                        });
                    }}
                    units={['auto', 'px', '%']}
                    className='bottom picker compact'
                    dragDirection='vertical-btt'
                />

                <CSSInput
                    parentData={parentData}
                    initialValue={initialData.left}
                    name='margin-left'
                    onChange={(value: Value) => {
                        setData((data) => {
                            const updatedData = {
                                ...data,
                                left: value,
                            }
                            onChange(updatedData, innerData);
                            return  updatedData;
                        });
                    }}
                    units={['auto', 'px', '%']}
                    className='left picker compact'
                    dragDirection='horizontal-ltr'
                />

                <CSSInput
                    parentData={parentData}
                    initialValue={initialData.right}
                    name='margin-right'
                    onChange={(value: Value) => {
                        setData((data) => {
                            const updatedData = {
                                ...data,
                                right: value,
                            }
                            onChange(updatedData, innerData);
                            return  updatedData;
                        });
                    }}
                    units={['auto', 'px', '%']}
                    className='right picker compact'
                    dragDirection='horizontal-rtl'
                />

                {
                    topLeftText
                    ? <i id='topleft-text'>Margin</i>
                    : null
                }


                {
                    showInnerPicker
                    ? (
                        <div className='inner-box'>
                            <CSSInput
                                parentData={parentData}
                                initialValue={initialInnerData.top}
                                name='padding-top'
                                onChange={(value: Value) => {
                                    setInnerData((innerData) => {
                                        const updatedData = {
                                            ...innerData,
                                            top: value,
                                        }
                                        onChange(data, updatedData);
                                        return  updatedData;
                                    });
                                }}
                                units={['px', '%']}
                                className='top picker compact'
                                dragDirection='vertical-ttb'
                            />

                            <CSSInput
                                parentData={parentData}
                                initialValue={initialInnerData.bottom}
                                name='padding-bottom'
                                onChange={(value: Value) => {
                                    setInnerData((innerData) => {
                                        const updatedData = {
                                            ...innerData,
                                            bottom: value,
                                        }
                                        onChange(data, updatedData);
                                        return  updatedData;
                                    });
                                }}
                                units={['px', '%']}
                                className='bottom picker compact'
                                dragDirection='vertical-btt'
                            />

                            <CSSInput
                                parentData={parentData}
                                initialValue={initialInnerData.left}
                                name='padding-left'
                                onChange={(value: Value) => {
                                    setInnerData((innerData) => {
                                        const updatedData = {
                                            ...innerData,
                                            left: value,
                                        }
                                        onChange(data, updatedData);
                                        return  updatedData;
                                    });
                                }}
                                units={['px', '%']}
                                className='left picker compact'
                                dragDirection='horizontal-ltr'
                            />

                            <CSSInput
                                parentData={parentData}
                                initialValue={initialInnerData.right}
                                name='padding-right'
                                onChange={(value: Value) => {
                                    setInnerData((innerData) => {
                                        const updatedData = {
                                            ...innerData,
                                            right: value,
                                        }
                                        onChange(data, updatedData);
                                        return  updatedData;
                                    });
                                }}
                                units={['px', '%']}
                                className='right picker compact'
                                dragDirection='horizontal-rtl'
                            />
                            
                            {
                                centerText
                                ? <i id='center-text'>Padding</i>
                                : null
                            }

                        </div>
                    )
                    : null
                }

            </div>
        </div>
    );
}