import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/organisms/MainLayout';
import MenuPage from '@/pages/MenuPage'
import LoginPage from '@/pages/LoginPage';
import UserPage from '@/pages/UserPage';
import AppPage from '@/pages/AppPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>}></Route>
            {/* 메인레이아웃이 필요한 곳 */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<MenuPage />} />
              <Route path="/menu" element={<MenuPage/>}></Route>
              <Route path="/user" element={<UserPage/>}></Route>
              <Route path="/app" element={<AppPage/>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
