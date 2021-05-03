import React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'

const Definicion = () => {
    return (
        <Layout>
            <section>
                <div className="article-title">
                    <h1>¿Qué es STEM?</h1>
                </div>
                <StaticImage
                    src="../images/pexels-pixabay-256302.jpg"
                    placeholder="tracedSVG"
                    layout="fullWidth"
                    className="img-article"
                    quality={90}
                    alt="Una representación de las conexiones eléctricas del cerebro"
                />
            </section>
            <main class="content-principal">
                <div className="container-article">
                <p>El término STEM apareció por primera vez en 1990 en Estados Unidos. Fue creado por The National Science Fundation como un acrónimo de Science, Technology, Engineering y Mathematics con el que se hacía referencia de forma general a eventos, políticas, proyectos o programas alusivos a estas áreas (Bybee, 2013). Para ese entonces, el énfasis se centró en las áreas individuales, pues aún no se vislumbraba su integración.</p>

                <p>En el 2008, Georgette Yakman propuso en los Estados Unidos un nuevo marco de comprensión del enfoque, invitando a pasar de STEM a STEAM para adoptar un abordaje humanístico en el que la “A” hacía alusión a las artes físicas, plásticas, manuales y del lenguaje, y a las ciencias sociales (Ruíz, 2017). Este nuevo abordaje buscaba, además, promover una reflexión sobre las prácticas docentes que debían desarrollarse para cumplir con los objetivos del enfoque.</p>

                <p>Inicialmente, la educación con enfoque STEM fue un proceso liderado por políticos y empresarios para impulsar las vocaciones profesionales en carreras basadas en ciencia, tecnología, ingeniería o matemáticas, con el fin de promover la productividad y competitividad de las economías. Con el paso del tiempo, y con el surgimiento de propuestas como el enfoque educativo STEAM, la reflexión y las reformas empezaron a llevarse a los sistemas educativos formales: se generaron cambios en la educación primaria y secundaria, y se lideraron transformaciones en las metodologías de enseñanza para promover un aprendizaje en el que el estudiante tuviera un rol más activo. El objetivo era garantizar la adquisición de conocimientos y el desarrollo de habilidades (CORFO y Fundación Chile, 2017).</p>

                <p>En los siglos XX y XXI, varios acontecimientos a nivel mundial detonaron importantes transformaciones sociales, económicas y educativas que, más adelante, impulsaron el interés por el dominio del conocimiento en ciencia, tecnología, ingeniería y matemáticas.</p>


                <p>Desde el Ministerio de Educación Nacional y el MINTIC se promueve el enfoque educativo STEM como una forma de potenciar el diálogo de sabores, la resolución de problemas en los múltiples contextos de nuestra realidad colombiana y el desarrollo de competencias socio-emocionales o habilidades blandas.</p>
                </div>
            </main>
        </Layout>
    )
}

export default Definicion