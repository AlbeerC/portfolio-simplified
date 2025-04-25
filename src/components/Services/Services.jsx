import './Services.scss'

function Services () {

    return (
        <section id="services" className="services">
            <h2 className='section-title'>Servicios</h2>
            <article className="services-list">
                <div className="service">
                    <h3>🖥️ Sitio web profesional</h3>
                    <p>Ideal para emprendedores, negocios y profesionales. Sitio 100% personalizado, con diseño moderno, adaptado a todos los dispositivos.</p>
                </div>
                <div className="service">
                    <h3>⚙️ Instalación básica + personalización</h3>
                    <p>Para quienes ya tienen hosting y dominio. Me encargo de subir el sitio, dejarlo funcionando y adaptado a tus necesidades.</p>
                </div>
                <div className="service">
                    <h3>📝 Actualización de sitios existentes</h3>
                    <p>¿Ya tenés una web pero está desactualizada o se ve mal en celular? Puedo ayudarte a mejorarla sin empezar de cero.</p>
                </div>
                <div className="service">
                    <h3>🚀 Optimización inicial</h3>
                    <p>Entrega con SEO básico, carga rápida, formulario de contacto y botones a redes.</p>        
                </div>
            </article>
        </section>
    )
}

export default Services