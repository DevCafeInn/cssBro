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