import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AppHeader from "./components/AppHeader"
import Home from './pages/Home'
import AppFooter from './components/AppFooter.jsx'
function App() {

  return (
    <>
    <AppHeader/>
    <Home/>
    <AppFooter/>
    </>
  )
}

export default App
