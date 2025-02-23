
function CopyIcon({ width = 16 }) {

    return <svg width={width} className="svg-inline--fa fa-copy css-pro-copy-pinned" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"></path></svg>
}


function WrongIcon({ width = 16 }) {

    return <svg width={width} className="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg>
}


function ArrowIcon({ width = 16, isOpen }) {

    // const transformDegree = !isOpen ? "rotate(-90 256 256)" : '';
    return <svg width={width} style={{
        transition: 'transform 0.2s',
        transform: !isOpen ? 'rotateZ(-90deg)': '', 
    }} className="svg-inline--fa fa-chevron-down css-pro-visual-accordion-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
}

function DimensionIcon({ width = 10 }) {
    return <svg width={width} className="svg-inline--fa fa-ruler-combined" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ruler-combined" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9z"></path></svg>;
}

function FontIcon({ width = 10 })  {
    return <svg width={width} className="svg-inline--fa fa-font" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="font" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"></path></svg>
}

function ResetIcon({ width = 10 }) {
    return <svg width={width} className="svg-inline--fa fa-rotate-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rotate-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"></path></svg>
}

function AngleIcon({width = 10}) {
    return (
        <svg width={width} height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="10.6627" x2="0.5" y2="0.66272" stroke="#CCCCCC" stroke-linejoin="round"></line>
          <line y1="10.5309" x2="10.011" y2="10.5309" stroke="#CCCCCC" stroke-linejoin="round"></line>
          <path d="M0.351067 6.17887C2.00086 5.89892 5.17854 6.33932 4.69097 10.3404" stroke="#CCCCCC"></path>
        </svg>
    );
}

function BorderRadiusIcon({width = 10}) {
    return (
        <svg width={width} height="12" viewBox="1 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 9.5V10.5H9.5V9.5H10.5ZM8.5 9.5V10.5H7.5V9.5H8.5ZM6.5 9.5V10.5H5.5V9.5H6.5ZM4.5 9.5V10.5H3.5V9.5H4.5ZM2.5 9.5V10.5H1.5V9.5H2.5ZM10.5 7.5V8.5H9.5V7.5H10.5ZM2.5 7.5V8.5H1.5V7.5H2.5ZM2.5 5.5V6.5H1.5V5.5H2.5ZM8 1.5C9.3435 1.5 10.441 2.562 10.4975 3.8915L10.5 4V6.5H9.5V4C9.5 3.2045 8.8725 2.5485 8.088 2.5025L8 2.5H5.5V1.5H8ZM2.5 3.5V4.5H1.5V3.5H2.5ZM2.5 1.5V2.5H1.5V1.5H2.5ZM4.5 1.5V2.5H3.5V1.5H4.5Z" fill="#CCCCCC"></path>
        </svg>
    );
}

function FontSizeIcon({width = 17}) {
    return (
        <svg style={{verticalAlign: 'text-bottom'}} width={width} height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.33 11L9.168 3.3H10.147L12.974 11H11.995L11.291 9.02H8.013L7.298 11H6.33ZM8.288 8.272H11.016L9.652 4.466L8.288 8.272Z" fill="#CCCCCC"></path>
            <path d="M0.27 11L2.592 4.7H3.393L5.706 11H4.905L4.329 9.38H1.647L1.062 11H0.27ZM1.872 8.768H4.104L2.988 5.654L1.872 8.768Z" fill="#CCCCCC"></path>
        </svg>
    );
}

function LineHeightIcon() {
    return (
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(0.5, 0)" d="M3.33 12L6.168 4.3H7.147L9.974 12H8.995L8.291 10.02H5.013L4.298 12H3.33ZM5.288 9.272H8.016L6.652 5.466L5.288 9.272Z" fill="#CCCCCC"></path>
            <line y1="15.5" x2="14" y2="15.5" stroke="#CCCCCC"></line>
            <line y1="0.5" x2="14" y2="0.5" stroke="#CCCCCC"></line>
        </svg>
    );
}

export { CopyIcon, WrongIcon, ArrowIcon, DimensionIcon,  FontIcon, ResetIcon, AngleIcon, BorderRadiusIcon, FontSizeIcon, LineHeightIcon };