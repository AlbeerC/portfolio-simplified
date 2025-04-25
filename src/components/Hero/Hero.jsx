import './Hero.scss'
import gif from '../../assets/gif-hero.gif'
import desktop from '../../assets/img-hero.png'
import Socials from '../Socials/Socials'
import scrollDown from '../../assets/scrolldown.gif'

function Hero () {

    return (
        <section className="hero" id='home'>
            <article className='hero-content'>
                <div className="texts">
                    <h4>Hola, soy</h4>
                    <h2>Alberto Caminos</h2>
                    <p>Ayudo a emprendedores y negocios a tener presencia online con sitios web rápidos y fáciles de usar</p>
                    <button>Quiero mi web</button>
                </div>

                <div className="hero-img">
                    <img src={desktop} alt="" />
                </div>
            </article>

            <img src={scrollDown} className='scroll-down' alt="animation scroll down gif" />
        </section>
    )
}

export default Hero