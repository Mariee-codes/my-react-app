import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default function Main() {
  return <h1>Main component</h1>
}

<main>
  <form>
    <input  

    type = "text"
    placeholder="e.g oregano"
    aria-label="Add ingredient
    "/>

    <button>
      Add ingredient
    </button>
    

  </form>
</main>