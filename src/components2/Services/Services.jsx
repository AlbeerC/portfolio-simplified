import './Services.scss'
import { IoIosBusiness } from "react-icons/io"
import { GiShoppingBag } from "react-icons/gi"
import { RiComputerFill } from "react-icons/ri"
import { IoMegaphone } from "react-icons/io5"

function Services () {

    return (
        <section className="services container" id='services'>
            <div className="titles">
                <h2>Servicios</h2>
                <h3>Servicios</h3>
            </div>

            <article className="services-list">
                <div className="service">
                    <div className='icon'>
                        <GiShoppingBag />
                    </div>
                    <h4>01</h4>
                    <div>
                        <h5>Catálogo de productos o servicios</h5>
                        <p>Mostrá lo que ofrecés con fotos, descripciones y precios. Perfecto para emprendimientos que quieren exponer su oferta sin necesidad de una tienda online</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'>
                        <IoIosBusiness />
                    </div>
                    <h4>02</h4>
                    <div>
                        <h5>Página Institucional</h5>
                        <p>Mostrá tu negocio con una página profesional y personalizada. Ideal para contar quién sos, qué hacés y cómo contactarte, todo en un solo lugar claro y fácil de navegar</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'>
                        <RiComputerFill />
                    </div>
                    <h4>03</h4>
                    <div>
                        <h5>Portfolio visual</h5>
                        <p>Mostrá tus trabajos anteriores de forma ordenada y atractiva. Ideal para tatuadores, fotógrafos, diseñadores o artesanos</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'>
                        <IoMegaphone />
                    </div>
                    <h4>04</h4>
                    <div>
                        <h5>Landing page promocional</h5>
                        <p>Una página enfocada en una campaña, promoción o lanzamiento. Va directo al grano: qué ofrecés, por qué es bueno y cómo conseguirlo</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Services