import React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'

const RutaSTEM = () => {
    return (
        <Layout>
            <section>
                <div className="article-title">
                    <h1>Sobre Ruta STEM</h1>
                </div>
            </section>
            <main class="list-art">
                <article className="art-ruta-stem">
                    <div className="heading-article">
                        <h2>Plataforma de formación</h2>
                        <p>Para facilitar la apropiación del enfoque educativo STEM, diseñamos una metodología gamificada que hace mucho más fácil la navegación por el universo STEM.</p>
                        <a href="https://portalstem.cpe.gov.co/" target="_blank" rel="noreferrer" className="btn-detail amarillo">Conocer</a>
                    </div>
                    <div>
                        <StaticImage
                            src="../images/plataforma-formacion.svg"
                            layout="constrained"
                            width={200}
                            alt="Vector de la plataforma de formación"
                        />
                    </div>
                </article>
                <article className="art-ruta-stem">
                <div className="heading-article">
                        <h2>Material de apoyo</h2>
                        <p>Realizamos una selección de contenidos para acompañarte en el proceso de apropiación de este enfoque educativo.</p>
                        <a href="https://mintic.gov.co" target="_blank" rel="noreferrer" className="btn-detail amarillo">Descargar</a>
                    </div>
                    <div>
                        <StaticImage
                            src="../images/material-relacionado.svg"
                            layout="constrained"
                            width={200}
                            alt="Vector del material relacionado"
                        />
                    </div>
                </article>
            </main>    
        </Layout>
    )
}

export default RutaSTEM
