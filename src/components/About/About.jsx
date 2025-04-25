import './About.scss'
import face from '../../assets/foto-cv.jpeg'
import Socials from '../Socials/Socials'

function About () {

    return (
        <section className="about" id='aboutme'>
            <div className="left">
                <img src={face} alt="me" />
            </div>
            <div className="right">
                <h2 className='section-title'>Sobre mi</h2>
                <p className='text'>Soy Alberto, desarrollador web argentino. Me gusta crear sitios claros, modernos y funcionales que reflejen la identidad de cada proyecto. En cada web busco que el diseño no solo se vea bien, sino que sea fácil de usar y transmita confianza.</p>
                <Socials />
            </div>

        </section>
    )
}

export default About