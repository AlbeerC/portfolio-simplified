import './Landing.scss'
import Socials from '../../components/Socials/Socials'

function Landing() {

    return (
        <section className="landing container" id='home'>
            <h1>Desarrollo tu <span>sitio web</span></h1>
            <h3>Creo sitios rápidos, claros y pensados para que tus clientes te encuentren y te contacten sin complicaciones</h3>
            <a href="#projects"><button>Ver proyectos</button></a>
            <Socials />
        </section>
    )
}

export default Landing