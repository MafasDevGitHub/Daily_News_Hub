import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './components/home'
import Contact from './components/contact'
import Header from './components/header'
import PostComponent from './components/posts'

import MainLayout from './layouts/mainLayout'
import Newsletter from './components/utils/newsletter'

const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='contact' element={<Contact />} />
          <Route path='newsletter' element={<Newsletter/>}/>
          <Route path='article/:id' element={<PostComponent/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Router