import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'

import Landing from '../../components2/Landing/Landing'
import Services from '../../components2/Services/Services'
import Projects from '../../components2/Projects/Projects'
import Contact from '../../components2/Contact/Contact'

function MainLayout() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300) // Pequeña espera para asegurar que la vista se ha cargado
    }
  }, [location])

  return (
    <main>
      <Landing />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

export default MainLayout;
