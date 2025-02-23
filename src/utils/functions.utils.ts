export type DragDirection = 
    | 'horizontal-ltr' 
    | 'horizontal-rtl' 
    | 'vertical-ttb' 
    | 'vertical-btt';

export const calculateNewValue = (
    startValue: number,
    delta: number,
    direction: DragDirection,
    sensitiviy: number = 1.2, // Lesser value means more sensitivity
): number => {
    switch (direction) {
        case 'horizontal-ltr':
            return startValue + Math.floor(delta / sensitiviy);
        case 'horizontal-rtl':
            return startValue - Math.floor(delta / sensitiviy);
        case 'vertical-ttb':
            return startValue + Math.floor(delta / sensitiviy);
        case 'vertical-btt':
            return startValue - Math.floor(delta / sensitiviy);
        default:
            return startValue;
    }
};

export function convertUnits(previousUnit: string, currentUnit: string, value: number, contextValue = 100) {
    const rootFontSize = 16;
    const vw = window.innerWidth / 100;
    const vh = window.innerHeight / 100;

    let valueInPx;
    switch (previousUnit) {
        case 'px':
            valueInPx = value;
            break;
        case '%':
            valueInPx = (value / 100) * contextValue;
            break;
        case 'em':
        case 'rem':
            valueInPx = value * rootFontSize;
            break;
        case 'vw':
            valueInPx = value * vw;
            break;
        case 'vh':
            valueInPx = value * vh;
            break;
        default:
            throw new Error(`Unsupported previous unit: ${previousUnit}`);
    }

    switch (currentUnit) {
        case 'px':
            return valueInPx;
        case '%':
            return (valueInPx / contextValue) * 100;
        case 'em':
        case 'rem':
            return valueInPx / rootFontSize;
        case 'vw':
            return valueInPx / vw;
        case 'vh':
            return valueInPx / vh;
        default:
            throw new Error(`Unsupported current unit: ${currentUnit}`);
    }
}