import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <footer>
            <div className="brand-footer">
                <div className="col">
                    <StaticImage
                        src="../images/logo-colombiaaprende.png"
                        alt="Logo del Portal Educativo Colombia Aprende"
                        placeholder="tracedSVG"
                        width={300}
                    />
                </div>
                <div className="footer-nav">
                    <div className="links-footer">
                        <ul>
                            <li><Link to="/definicion">¿Qué es STEM?</Link></li>
                            <li><Link to="/rutaSTEM">Ruta STEM</Link></li>
                            <li><Link to="/contenidos">Contenidos</Link></li>
                            <li><a href="https://google.com" target="_blank" rel="noreferrer">Portal Nacional STEM</a></li>
                        </ul>
                    </div>
                    <div className="edusitios">
                        <a target="_blank" rel="noreferrer" href="https://edusitios.colombiaaprende.edu.co">Ir al home de edusitios</a>
                    </div>
                </div>
            </div>            
            <div className="institucional">
                <div class="logoMEN">
                    <StaticImage
                        src="../images/men.png"
                        placeholder="tracedSVG"
                        layout="constrained"
                        width={300}
                        alt="Logo del Ministerio de Educación Nacional"
                    />
                </div>
                <div class="contact-info">
                    <p>Mesa de ayuda: <a href="mailto:mesadeayuda@tecnologia.mineducacion.gov.co">mesadeayuda@tecnologia.mineducacion.gov.co</a></p>
                    <p>Línea Nacional: 01 8000 51 0258. Línea en Bogotá: 4890400</p>
                    <p>Horario de atención: Lunes a viernes, 8:00 a.m. - 5:00 p.m.</p>
                    <p>Reservados todos los derechos {new Date().getFullYear()} - Términos y condiciones</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer