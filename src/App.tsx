import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Header from './components/molecules/Header'
import MenuPage from './pages/MenuPage'
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import AppPage from './pages/AppPage';
import LeftBar from './components/molecules/LeftBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <LeftBar/>
        <div className='ml-[130px] mt-3'>
          <Routes>
            <Route path="/" element={<LoginPage/>}></Route>
            <Route path="/menu" element={<MenuPage/>}></Route>
            <Route path="/user" element={<UserPage/>}></Route>
            <Route path="/app" element={<AppPage/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
