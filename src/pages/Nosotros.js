import react from 'react'
import Navigation from '../components/Navigation'

function Nosotros () {
  return(
    <>

      <div className="bg-fisio -skew-y-6 pb-12 md:pb-16 lg:pb-24 xl:pb-32 mt-12 mb-12 md:mb-24">
        <div className = 'skew-y-6'>
          <div className="realative">
            <div className="top-2 right-2 absolute">
              <h1 className="titulo text-white font-bold w-full">Nosotros</h1>
            </div>
          </div>
        </div>
        <div className="h-24"></div>
        <div className="bg-white rounded-r-xl skew-y-6 mt-12 w-5/6 md:w-3/4 p-2">
          <h1 className="sub-titulo text-fisio font-bold">Nuestros terapeutas físicos</h1>
          <p className='parr-contacto'>
            Nuestros terapeutas físicos son altamente capacitados en diferentes áreas de la rehabilitación y prevensión de lesiones y diferentes síndromes y patologías. También nos especializamos en el tratamiento del dolor, atención gerontológica y pediátrica.
          </p>
        </div>
        <div className="bg-white rounded-r-xl skew-y-6 mt-12 w-5/6 md:w-3/4 p-2">
          <h1 className="sub-titulo text-fisio font-bold">Instalaciones</h1>
          <p className='parr-contacto'>
            Nuestras instalaciones son accesibles, y cómodas. Un lugar donde tu familiar podrá descansar mientras recibes tu sesión de fisioterapia por uno de nuestros terapeutas físicos.
          </p>
        </div>
      </div>
    </>
  )
}

export default Nosotros
