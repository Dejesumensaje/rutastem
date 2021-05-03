import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="definicion">
      <div className="img-definicion">
        <StaticImage
          src="../images/vector-definicion.svg"
          placeholder="tracedSVG"
          className="img-destacado"
        />
      </div>
      <div className="content-destacado">
        <h1>¿Qué es <span class="outline">STEM?</span></h1>      
        <p>Te explicamos en qué consiste esta metodología de aprendizaje activo y por qué creemos que es fundamental para el desarrollo de competencias del siglo XXI y habilidades para la cuarta revolución industrial.</p>
        <Link to="/definicion" className="btn-detail">Ver más</Link>
      </div>
    </section>
    <section className="contenidos">
      <div className="content-contenidos">
        <h2>Contenidos</h2>
        <p>El equipo del Ministerio de Educación Nacional y el MinTIC realizaron esta selección de contenidos para promover el enfoque educativo STEM entre la comunidad educativa.</p>
        <Link to="/contenidos" className="btn-detail">Ver más</Link>
      </div>
      <div className="img-contenidos">
        <StaticImage
          src="../images/contenidos-img.svg"
          placeholder="tracedSVG"
          className="img-destacado"
        />
      </div>
    </section>
    <section className="ruta-home">
      <div className="ruta-main">
        <div className="container-ruta">
          <h2>Sobre Ruta <span className="outline">STEM</span></h2>
          <p>Ruta STEM es una iniciativa del Ministerio de Educación Nacional y  el Ministerio TIC para formar a más de 20 mil docentes en este enfoque educativo.</p>
          <Link to="/rutaSTEM" className="btn-detail">Conocer más</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
