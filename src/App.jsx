import { useEffect, useState, createContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Layout from './Layout'
import About from './pages/About'
import AtheistCat from './pages/Atheist/AtheistCat'
import Home from "./pages/Home"
import NariCategories from './pages/Mohila/NariCategories'
import VideoCategories from './pages/Videos/VideoCategories'
import WrittenCategories from './pages/Written/WrittenCategories'
import BlogList from './pages/Blog/BlogList'
import BlogDetails from './pages/Blog/BlogDetails'
import Bookmarks from './pages/Blog/Bookmarks'
import SearchResult from './components/SearchResult'
import DuaZikr from './pages/DuaZikr'
import Answers from './components/Answers'
import VideoAnswer from './components/VideoAnswer'
import WrittenSubCategories from './pages/Written/WrittenSubCategory'
import QuestionList from './components/home/QuestionList'

export const AdminContext = createContext()
export const ModeratorContext = createContext()

export default function App() {

  const [isAdmin, setIsAdmin] = useState({
    admin_token: ''
  })
  const [isMod, setIsMod] = useState({
    moderator_token: ''
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
        <ModeratorContext.Provider value={[isMod, setIsMod]}>
          <Router>
            <Switch>
              {
                loading ? <div className="loading" style={{ textAlign: 'center' }}>আপনার <br /> দ্বীনি <br /> জিজ্ঞাসা</div> :
                  <>
                    <Layout>
                      <Route path="/" exact>
                        <Home />
                      </Route>
                      <Route path="/about-us">
                        <About />
                      </Route>
                      <Route path="/dua-zikr">
                        <DuaZikr />
                      </Route>
                      <Route path="/likhito-proshno">
                        <WrittenCategories />
                      </Route>
                      <Route path="/category/:cat/type/:types">
                        <WrittenSubCategories />
                      </Route>
                      <Route path="/category-/:cat/sub-category/:subCat/type/:type">
                        <QuestionList />
                      </Route>
                      <Route path="/video-proshno">
                        <VideoCategories />
                      </Route>

                      <Route path="/nari-ongon">
                        <NariCategories />
                      </Route>

                      <Route path="/nastikkobad">
                        <AtheistCat />
                      </Route>
                      <Route path="/answer/cat/:qtype/id/:quId">
                        <Answers />
                      </Route>
                      <Route path="/video-answer/q/:vidq/id/:vidId">
                        <VideoAnswer />
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
                      <Route path="/search/:search">
                        <SearchResult />
                      </Route>
                    </Layout>
                  </>
              }
            </Switch>
          </Router>
        </ModeratorContext.Provider>
      </AdminContext.Provider>
    </>
  )
}
