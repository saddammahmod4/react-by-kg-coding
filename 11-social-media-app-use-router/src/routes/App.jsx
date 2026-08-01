import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import PostListProvider from '../store/post-list-store'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import CreatePost from '../components/CreatePost'
import PostList from '../components/PostList'

function App() {

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar />
        <div className='content'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
