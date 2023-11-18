// Import React-DOM
import ReactDOM from 'react-dom/client'

// Import Browser-Router
import { BrowserRouter } from 'react-router-dom'

// Import App
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)