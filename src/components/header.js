import React,{useState} from 'react'
import { Link } from "gatsby"
import { FiAlignJustify } from 'react-icons/fi'
import {StaticImage} from 'gatsby-plugin-image'

const Header = () => {
  const [show,setShow] = useState(false)
  return (
    <header>
      <div className="headerContainer">
        <div className="brand">
        <Link to="/">
          <StaticImage 
            src="../images/logo.png"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            className="brand-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          </Link>          
        </div>
        <div className="nav-toggle">
          <button className="nav-btn" onClick={()=> setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
      </div>
      <div class={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Home</Link>
          <Link to="/definicion" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>¿Qué es STEM?</Link>
          <Link to="/rutaSTEM" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Ruta STEM</Link>
          <Link to="/contenidos" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Contenidos</Link>
          <a href="https://portalstem.cpe.gov.co/" rel="noreferrer" target="_blank" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Portal Nacional STEM</a>
      </div>
    </header>
  )
}

export default Header
