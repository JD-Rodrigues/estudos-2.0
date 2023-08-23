// eslint-disable-next-line import/no-unused-modules
import { createRoot } from 'react-dom/client'
import App from '../presentation/App.tsx'

const root = createRoot(document.querySelector('#root')!)

root.render(<App />)
