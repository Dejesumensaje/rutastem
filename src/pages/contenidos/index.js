import React from 'react'
import Layout from '../../components/layout'
import {StaticImage} from 'gatsby-plugin-image'

const Index = () => {
    return (
        <Layout>
            <section>
                <div className="article-title">
                    <h1>Contenidos</h1>
                </div>
            </section>
            <main class="list-art">
                <article className="art-contenidos">
                    <div className="heading-article">
                        <h2>¿De dónde proviene la energía que utilizamos?</h2>
                        <p>Recurso dirigido a estudiantes de básica primaria para comprender de dónde proviene la energía que utilizamos.</p>
                        <a href="https://contenidosparaaprender.colombiaaprende.edu.co/G_3/S/menu_S_G03_U05_L05/index.htmlº" target="_blank" rel="noreferrer" className="btn-detail">Ver más</a>
                    </div>
                    <div>
                        <StaticImage
                            src="../../images/cpa.png"
                            layout="constrained"
                            width={200}
                            alt="Vector de la plataforma de formación"
                            className="img-round"
                            placeholder="tracedSVG"
                        />
                    </div>
                </article>
                <article className="art-contenidos">
                <div className="heading-article">
                        <h2>¿Cómo construyo un imán usando electricidad?</h2>
                        <p>Este recurso está enfocado para que los estudiantes de 4 y 5 de básica primaria comprenda las fuerzas magnéticas en la vida cotidiana. </p>
                        <a href="https://contenidosparaaprender.colombiaaprende.edu.co/G_5/S/menu_S_G05_U02_L06/index.html" target="_blank" rel="noreferrer" className="btn-detail">Ver más</a>
                    </div>
                    <div>
                        <StaticImage
                            src="../../images/cpa.png"
                            layout="constrained"
                            width={200}
                            alt="Vector del material relacionado"
                            className="img-round"
                            placeholder="tracedSVG"
                        />
                    </div>
                </article>
                <article className="art-contenidos">
                <div className="heading-article">
                        <h2>¿Cómo maneja el ser humano los recursos hídricos?</h2>
                        <p>Este recurso va dirigido a estudiantes de grados 6 y 7. Su estudio les ayudará a entender por qué debemos valorar los recursos hídricos del ecosistema local, así como la razón por la que no podría existir la vida sin agua.</p>
                        <a href="https://contenidosparaaprender.colombiaaprende.edu.co/G_7/S/menu_S_G07_U05_L01/index.html" target="_blank" rel="noreferrer" className="btn-detail">Ver más</a>
                    </div>
                    <div>
                        <StaticImage
                            src="../../images/cpa.png"
                            layout="constrained"
                            width={200}
                            alt="Vector del material relacionado"
                            className="img-round"
                            placeholder="tracedSVG"
                        />
                    </div>
                </article>
                <article className="art-contenidos">
                <div className="heading-article">
                        <h2>¿Qué sucede a nivel atómico y molecular cuando disolvemos sal en agua?</h2>
                        <p>Este recurso va dirigido a estudiantes de grados 8 y 9. Su estudio les permitirá, entre otras cosas, indagar acerca de los procesos industriales que generan en el ambiente acumulación.</p>
                        <a href="https://contenidosparaaprender.colombiaaprende.edu.co/G_9/S/menu_S_G09_U04_L02/index.html" target="_blank" rel="noreferrer" className="btn-detail">Ver más</a>
                    </div>
                    <div>
                        <StaticImage
                            src="../../images/imagen-stem.jpeg"
                            layout="constrained"
                            width={200}
                            alt="Vector del material relacionado"
                            className="img-round"
                            placeholder="tracedSVG"
                        />
                    </div>
                </article>
                <article className="art-contenidos">
                <div className="heading-article">
                        <h2>¿Cómo podemos estudiar el movimiento armónico simple (M.A.S.) a partir de las vibraciones en la tela de una araña?</h2>
                        <p>Este recurso va dirigido a estudiantes de grados 10 y 11. Su estudio les permitirá entender dónde estamos ubicados en el tiempo y en el espacio y por qué es importante estudiar el movimiento de objetos en términos de su velocidad y aceleración.</p>
                        <a href="https://contenidosparaaprender.colombiaaprende.edu.co/G_11/S/menu_S_G11_U01_L06/index.html" target="_blank" rel="noreferrer" className="btn-detail">Ver más</a>
                    </div>
                    <div>
                        <StaticImage
                            src="../../images/imagen-stem.jpeg"
                            layout="constrained"
                            width={200}
                            alt="Vector del material relacionado"
                            className="img-round"
                            placeholder="tracedSVG"
                        />
                    </div>
                </article>
                <article className="art-contenidos">
                <div className="heading-article">
                        <h2>¿Por qué a veces sentimos corrientazos cuando saludamos a alguien?</h2>
                        <p>Este recurso va dirigido a estudiantes de grados 10 y 11. Su estudio les permitirá explicar el significado de la humedad relativa y su relación con algunos fenómenos naturales.</p>
                        <a href="https://contenidosparaaprender.colombiaaprende.edu.co/G_10/S/menu_S_G10_U04_L02/index.html" target="_blank" rel="noreferrer" className="btn-detail">Ver más</a>
                    </div>
                    <div>
                        <StaticImage
                            src="../../images/imagen-stem.jpeg"
                            layout="constrained"
                            width={200}
                            alt="Vector del material relacionado"
                            className="img-round"
                            placeholder="tracedSVG"
                        />
                    </div>
                </article>       
            </main>            
        </Layout>
    )
}

export default Index
