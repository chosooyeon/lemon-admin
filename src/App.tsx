import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Header from './components/molecules/Header'
import MenuPage from './pages/MenuPAge'
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import AppPage from './pages/AppPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/menu" element={<MenuPage/>}></Route>
          <Route path="/user" element={<UserPage/>}></Route>
          <Route path="/app" element={<AppPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
