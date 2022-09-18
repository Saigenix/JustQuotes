import Link from 'next/link'
import Image from 'next/image'



const Navbar = () => {
  return (
    <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      <Image src='/quote.png' alt='logo'  width={35}
      height={35}
      /> 
      <Link href="/">
      <a>
      <h3 className="title">
      Just Quotes</h3>
      </a>
      </Link>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
  <Link href="/signup" ><a >Login/sign-up</a></Link>
    <Link href="/about" ><a>About us</a></Link>
    <Link href="/contact" ><a>Contact us</a></Link>
    <Link href="/privacy" ><a>Privacy policy</a></Link>
    <Link href="/more" ><a>More Tools</a></Link>
  </div>
</div>
  )
}

export default Navbar