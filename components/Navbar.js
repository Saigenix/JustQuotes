import Link from 'next/link'
import Image from 'next/image'
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className={styles.nav}>
  <input type="checkbox" id={styles.nav_check} />
  <div className={styles.nav_header}>
    <div className={styles.nav_title}>
      <Image src='/quote.png' alt='logo'  width={35}
      height={35}
      /> 
      <Link href="/">
      <a>
      <h3 className={styles.title}> Just Quotes</h3>
      </a>
      </Link>
    </div>
  </div>
  <div className={styles.nav_btn}>
    <label htmlFor={styles.nav_check}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className={styles.nav_links}>
    <Link href="/category/Ai" ><a style={{color:"red" ,font:"extra-bold"}}>Ai</a></Link>
    <Link href="/category" ><a>Categories</a></Link>
    <Link href="/privacy" ><a>Privacy policy</a></Link>
    <Link href="/more" ><a>More Tools</a></Link>
  </div>
</div>
  )
}

export default Navbar