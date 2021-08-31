import Header from './components/home/Header'
import Navbar from './components/home/nav/Navbar'
import Footer from './components/home/Footer'
import { Fab } from '@material-ui/core'
import ScrollTop from './components/ScrollTop'
import { useEffect } from 'react'

export default function Layout(props) {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, [])
    return (
        <>
            <main>
                <Header />
                <Navbar />
                {props.children}
            </main>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <span className="fw-bold">^</span>
                </Fab>
            </ScrollTop>
            <Footer />
        </>
    )
}
