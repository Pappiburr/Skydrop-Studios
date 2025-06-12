import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter} from 'react-router-dom'
import './app.css'
import App from './App.tsx'

ReactDom.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


export default App;