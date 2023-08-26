// eslint-disable-next-line import/no-unused-modules
import { createRoot } from 'react-dom/client'
import App from '../presentation/App.tsx'

const rootDiv = document.querySelector('#root') as HTMLDivElement

const root = createRoot(rootDiv)

root.render(<App />)
