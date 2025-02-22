export function getAllCSSProperties(element: HTMLElement) {
    if (!(element instanceof HTMLElement)) {
      throw new Error('Input must be a valid HTML element');
    }
  
    const styles = window.getComputedStyle(element);
    const cssProperties: Record<string, number|string> = {};
  
    for (let property of styles) {
      cssProperties[property] = styles.getPropertyValue(property);
    }
  
    return cssProperties;
}
