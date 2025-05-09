import './Landing.scss'
import Socials from '../../components/Socials/Socials'

function Landing() {

    return (
            <section className="landing container" id="home">
                <h1 className="fade-in" style={{ animationDelay: '0s' }}>
                    Desarrollo tu <span>sitio web</span>
                </h1>
                <h3 className="fade-in" style={{ animationDelay: '0.3s' }}>
                    Creo sitios rápidos, claros y pensados para que tus clientes te encuentren y te contacten sin complicaciones
                </h3>
                <a href="#projects" className="fade-in" style={{ animationDelay: '0.6s' }}>
                    <button>Ver proyectos</button>
                </a>
                <div className="fade-in" style={{ animationDelay: '0.9s' }}>
                    <Socials />
                </div>
            </section>

    )
}

export default Landing