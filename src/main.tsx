import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const root = document.getElementById("root");

if(root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}