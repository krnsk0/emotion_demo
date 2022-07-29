import { Global } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { globalStyles } from './globalStyles';

const app = document.getElementById('root')!;
const root = createRoot(app);
root.render(
  <>
    <Global styles={globalStyles} />
    <App />
  </>,
);
