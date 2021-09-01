import { useEffect, useState, createContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Layout from './Layout'
import About from './pages/About'
import AtheistCat from './pages/Atheist/AtheistCat'
import AtheistMain from './pages/Atheist/AtheistMain'
import DuaZikir from './pages/DuaZikir'
import Home from "./pages/Home"
import NariCategories from './pages/Mohila/NariCategories'
import NariMain from './pages/Mohila/NariMain'
import PdfCategories from "./pages/PDF/PdfCategories"
import PdfMain from './pages/PDF/PdfMain'
import VideoCategories from './pages/Videos/VideoCategories'
import WrittenCategories from './pages/Written/WrittenCategories'
import WrittenMain from './pages/Written/WrittenMain'
import Admin from './pages/Admin/Admin'
import CreatePost from './pages/Admin/CreatePost'
import PostList from './pages/Admin/PostList'
import CreateVideo from './pages/Admin/CreateVideo'
import VideoList from './pages/Admin/VideoList'
import UserQues from './pages/Admin/UserQues'
import CreatePdf from './pages/Admin/CreatePdf'
import PdfList from './pages/Admin/PdfList'
import Login from './pages/Admin/Login'
import PrivateRoute from './pages/Admin/PrivateRoute'
import VideoCategoryMain from './pages/Videos/VideoCategoryMain'
import BlogList from './pages/Blog/BlogList'
import BlogDetails from './pages/Blog/BlogDetails'
import Bookmarks from './pages/Blog/Bookmarks'

export const AdminContext = createContext()

export default function App() {

  const [isAdmin, setIsAdmin] = useState({
    email: '',
    password: '',
    code: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
        <Router>
          <Switch>
            {
              loading ? <div className="loading">আপনার দ্বীনি জিজ্ঞাসা</div> :
                <>
                  <Layout>
                    <Route path="/" exact>
                      <Home />
                    </Route>
                    <Route path="/about-us">
                      <About />
                    </Route>
                    <Route path="/Dua-Zikir">
                      <DuaZikir />
                    </Route>
                    <Route path="/likhito-proshno">
                      <WrittenCategories />
                    </Route>
                    <Route path="/proshnottor/likhito-proshno/:likId">
                      <WrittenMain />
                    </Route>
                    <Route path="/video-proshno">
                      <VideoCategories />
                    </Route>
                    <Route path="/videos/video-proshno/:vidId">
                      <VideoCategoryMain />
                    </Route>
                    <Route path="/pdf-books">
                      <PdfCategories />
                    </Route>
                    <Route path="/e-books/pdf-books/:pdfId">
                      <PdfMain />
                    </Route>
                    <Route path="/nari-ongon">
                      <NariCategories />
                    </Route>
                    <Route path="/proshnottor/nari-ongon/:nariId">
                      <NariMain />
                    </Route>
                    <Route path="/nastikkobad">
                      <AtheistCat />
                    </Route>
                    <Route path="/proshnottor/nastikkobad/:athId">
                      <AtheistMain />
                    </Route>
                    <Route path="/blog">
                      <BlogList />
                    </Route>
                    <Route path="/blog-post/:blogId">
                      <BlogDetails />
                    </Route>
                    <Route path="/blogpost/bookmark">
                      <Bookmarks />
                    </Route>


                    <Route path="/login">
                      <Login />
                    </Route>
                    <PrivateRoute path="/admin">
                      <Admin />
                    </PrivateRoute>
                    <PrivateRoute path="/create-post">
                      <CreatePost />
                    </PrivateRoute>
                    <PrivateRoute path="/post-list">
                      <PostList />
                    </PrivateRoute>
                    <PrivateRoute path="/create-video">
                      <CreateVideo />
                    </PrivateRoute>
                    <PrivateRoute path="/video-list">
                      <VideoList />
                    </PrivateRoute>
                    <PrivateRoute path="/create-pdf">
                      <CreatePdf />
                    </PrivateRoute>
                    <PrivateRoute path="/pdf-list">
                      <PdfList />
                    </PrivateRoute>
                    <PrivateRoute path="/user-question-list">
                      <UserQues />
                    </PrivateRoute>
                  </Layout>

                </>
            }
          </Switch>
        </Router>
      </AdminContext.Provider>
    </>
  )
}
