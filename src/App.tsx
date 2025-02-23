import { useEffect } from 'react';
import './App.css'
import { fonts } from './components/molecules/Typography/Typography';
import Panel from './components/Panel'

// const header = document.querySelector('#home h1') as HTMLElement;

export type AppProps = {
  element: HTMLElement,
};

function App({
  element,
}: AppProps) {

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
    <div id='cssbro'>
      <Panel element={element}  />
    </div>
  )
}

export default App
