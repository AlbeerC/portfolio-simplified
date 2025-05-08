import './Projects.scss'
import project1 from '../../assets/skullmaster.png'
import project2 from '../../assets/gympower.png'
import project3 from '../../assets/cafedlc.png'
import project4 from '../../assets/dublin.png'

function Projects () {

    return (
        <section className="projects container" id='projects'>
            <div className="titles">
                <h2>Proyectos</h2>
                <h3>Proyectos</h3>
            </div>
            <p className='subtitle'>Estos son ejemplos de los tipos de sitios que desarrollo, diseñados para adaptarse a diferentes necesidades y sectores. Desde sitios simples con funcionalidades básicas hasta sitios más avanzados</p>

            <article className="projects-list">
                <div className="project-card">
                    <img src={project1} alt="Skull Master" />
                    <div>
                        <h4>SkullMaster</h4>
                        <p>Pensado para atraer clientes potenciales mostrando el estilo del estudio de tatuajes, con un formulario integrado para facilitar consultas directas</p>
                        <a href='https://skull-master.vercel.app/'><button>Ver web</button></a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project2} alt="Gym power" />
                    <div>
                        <h4>Gym power</h4>
                        <p>Presenta los servicios, horarios, ubicación y datos de contacto de forma clara y accesible. Ideal para negocios que necesitan una presencia online simple pero efectiva</p>
                        <a href="https://gympower25.vercel.app/"><button>Ver web</button></a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project3} alt="Café de la casa" />
                    <div>
                        <h4>Café de la casa</h4>
                        <p>Incluye secciones con imágenes, menú digital accesible desde el celular y detalles de ubicación. Un buen ejemplo de cómo una estética cuidada puede mejorar la experiencia del usuario</p>
                        <a href="https://albeerc.github.io/coffee-shop/"><button>Ver web</button></a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project4} alt="Dublín" />
                    <div>
                        <h4>Dublín</h4>
                        <p>Desarrollado con panel de administración para actualizar el menú y un sistema de reservas online. Ideal para negocios que necesitan automatizar tareas y mejorar su atención al cliente</p>
                        <a href="https://dublin-f482a.web.app/"><button>Ver web</button></a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Projects