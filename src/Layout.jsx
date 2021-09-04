import Header from './components/home/Header'
import Navbar from './components/home/nav/Navbar'
import Footer from './components/home/Footer'
import { Fab } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ScrollTop from './components/ScrollTop'
import ScrollTopAuto from './components/ScrollTopAuto'

export default function Layout(props) {

    return (
        <ScrollTopAuto>
            <main>
                <Header />
                <Navbar />
                {props.children}
            </main>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <span className="fw-bold"><ArrowUpwardIcon /></span>
                </Fab>
            </ScrollTop>
            <Footer />
        </ScrollTopAuto>
    )
}
