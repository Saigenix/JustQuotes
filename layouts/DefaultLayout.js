import Navbar from "../components/Navbar"
import styles from "./DefaultLayout.module.css"
import Footer from "../components/Footer"
export default function DefaultLayout ({children}) {
  return (
    <>
    <div className={styles.up}>
    <Navbar/>
    </div>
    <main className={styles.down}>
        {children}
    </main>
    <Footer/>
    </>
  )
}

