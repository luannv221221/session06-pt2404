import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './App.css'
import Header from './layout/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './layout/UserLayout'
import AdminLayout from './layout/admin/AdminLayout'
import About from './pages/About'
import Product from './pages/Product'
import Dashboard from './pages/admin/Dashboard'
import CategoryManager from './pages/admin/CategoryManager'
import ProductManager from './pages/admin/ProductManager'
import CategoryManager2 from './pages/admin/CategoryManager2'
import CategoryAdd from './pages/admin/CategoryAdd'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout></UserLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/product' element={<Product></Product>}></Route>
        </Route>
        <Route path='/admin' element={<AdminLayout></AdminLayout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='category' element={<CategoryManager></CategoryManager>}></Route>
          <Route path='product' element={<ProductManager></ProductManager>}></Route>
          <Route path='category2' element={<CategoryManager2></CategoryManager2>}></Route>
          <Route path='category-add' element={<CategoryAdd></CategoryAdd>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
