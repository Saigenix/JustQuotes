import Link from 'next/link'
import Image from 'next/image'
import styles from "./Navbar.module.css";


const Footer = () => {
  return (
    <div className={styles.nav}>
  <input type="checkbox" id={styles.nav_check} />
  <div className={styles.nav_header}>
    <div className={styles.nav_title}>
      <h4 className={styles.title}> Made By Saigenix</h4>
    </div>
  </div>
  <div className={styles.nav_links}>
    <a href='https://github.com/Saigenix'>
        <img src="/git.png" className={styles.github}/>
    </a>
  </div>
</div>
  )
}

export default Footer