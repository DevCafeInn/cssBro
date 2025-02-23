// @ts-nocheck
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

function loadReactPanel(target: HTMLElement) {
  const rootElement = document.createElement("div");
  document.body.appendChild(rootElement);
  
  createRoot(rootElement).render(
    <StrictMode>
      <App element={target} />
    </StrictMode>,
  )
}

let lastElement = null;
let tooltip = null;
let isSticky = false;
let isDragging = false;
let offsetX = 0, offsetY = 0;
let isDarkMode = false;
let showImportantOnly = false;

const importantProperties = [
    "color", "font-size", "margin", "padding", "border", "background",
    "text-align", "position", "width", "height", "display", "opacity", "font-style"
];

// Function to create tooltip
function createTooltip() {
    tooltip = document.createElement("div");
    tooltip.id = "css-inspector-tooltip";
    tooltip.innerHTML = `
        <div id="tooltip-content"></div>
        <small>Press <b>Space to Stick</b> |<b> ESC</b> to unlock | Scroll Below</small>
    `;
    document.body.appendChild(tooltip);

    // const header = document.getElementById("tooltip-header");
    // header.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
}

// Function to get computed styles (only important ones)
function getFilteredStyles(element) {
    const computedStyle = window.getComputedStyle(element);
    const styles = {};

    for (let prop of importantProperties) {
        let value = computedStyle.getPropertyValue(prop);
        if (value && value !== "initial" && value !== "none" && value !== "auto") {
            styles[prop] = value;
        }
    }
    return styles;
}

// Update tooltip content
function updateTooltip(element) {
    if (!tooltip) createTooltip();

    lastElement = element;
    let tagName = element.tagName.toLowerCase();

    let styles = getFilteredStyles(element);
    
    let stylesText = Object.keys(styles).length > 0 
        ? Object.keys(styles).map(prop => `<div class="tooltip-item"><label><span style="color:#6db1f2; font-weight:600; font-size:1.4rem">${prop}:</span> <span style="color:#c599f7"> ${styles[prop]} </span> </label></div>`).join("")
        : `<span style="color:gray;">(No important styles applied)</span>`;
        document.getElementById("tooltip-content").innerHTML = `<div style="color:#65e06d; font-weight: bolder; font-size: 1.5rem; margin-bottom: 8px;">${tagName}</div>  ${stylesText}`;
    // Position tooltip dynamically
    const rect = element.getBoundingClientRect();
    tooltip.style.top = `${window.scrollY + rect.top + rect.height + 5}px`;
    tooltip.style.left = `${window.scrollX + rect.left}px`;
    tooltip.style.display = "block";
}

// Mouseover Event to Show Tooltip
document.addEventListener("mouseover", (event) => {
  const cssbroPanel = document.getElementById('cssbro');

  if((event.target as HTMLElement).closest('#cssbro')) {
    return;
  }
    if (!isSticky) {
        if (lastElement) lastElement.style.outline = "";
        lastElement = event.target;
        lastElement.style.outline = "2px solid red";
        updateTooltip(lastElement);
    }
});

document.addEventListener('click', (e) => {
    e.preventDefault();
    
    loadReactPanel(e.target);
});

// Keydown event to toggle sticky & dark mode
document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "Tab") {
        event.preventDefault();
        isSticky = !isSticky;
    } else if (event.code === "Escape") {
        isSticky = false;
        if (tooltip) tooltip.style.display = "none";
    } else if (event.code === "KeyD") {
        toggleDarkMode();
    }
});