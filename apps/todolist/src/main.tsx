import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import  { StrictMode } from 'react';
import store, { storeContext } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <storeContext.Provider value={store}> 
        <App />
    </storeContext.Provider>
  </StrictMode>
);
