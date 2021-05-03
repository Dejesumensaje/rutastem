import React,{useState} from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import {Link} from 'gatsby'

const Navbar = () => {
    const [show,setShow] = useState(false)
    return (
    <nav className="navbar">
        <div className="nav-toggle">
            <button className="nav-btn" onClick={()=> setShow(!show)}>
                <FiAlignJustify />
            </button>
        </div> 
        <div class={show ? "nav-links show-links" : "nav-links"}>
            <Link to="/" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Home</Link>
            <Link to="/definicion" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>¿Qué es STEM?</Link>
            <Link to="/rutaSTEM" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Ruta STEM</Link>
            <Link to="/contenidos" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Contenidos</Link>
            <a href="https://google.com" rel="noreferrer" target="_blank" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Portal Nacional STEM</a>
        </div>
    </nav>
    )
}

export default Navbar
