import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AppHeader from "./components/AppHeader"
import HomePage from './pages/HomePage.jsx'
import AppFooter from './components/AppFooter.jsx'
import Form from './components/Form.jsx'
function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header fisso in alto */}
      <AppHeader />
      

      <main className="flex-grow-1 container py-4">
        <HomePage/>
        <Form/>
      </main>
      

      <AppFooter />
    </div>
  )
}

export default App
