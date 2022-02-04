import react from "react";
import Navigation from "../components/Navigation";
import logo from "../img/logo/logo.png";
import spine from "../img/spine.png";
import { Link } from "react-scroll";

import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import ContactoFisio from "./ContactoFisio";

function Home() {
  return (
    <>
      {/* <div className="h-16"></div> */}
      <div className="">
        <div className="grid place-items-center" name="home">
          <img alt="" src={logo} className="w-5/6 py-20" />
        </div>
        <h1 className="titulo text-white bg-fisio text-center pt-6 h-full rounded-t-3xl border-fisio">
          TERAPIA ​<b>Física</b>
        </h1>
      </div>

      <div className="bg-fisio rounded-b-3xl">
        <div className="grid place-items-center py-12 mx-4">
          <img alt="spine" src={spine} />
        </div>
        {/* <div className="h-24 skew-y-6 bg-fisio"></div> */}
      </div>

      <Servicios />
      <div className="h-16" name="nosotros"></div>
      <Nosotros />
      <div name="contacto" className="h-16"></div>
      <h1 className="ml-4 mt-16 titulo text-fisio font-bold">Contacto</h1>
      <div className="h-16"></div>
      <div className="mb-72">
        <ContactoFisio />
      </div>
      <div className="bg-fisio">
        <h1 className="titulo text-white text-center font-bold my-6 pt-4">
          ¡Aprovecha!
        </h1>
        <div className="bg-fisio grid grid-cols-1 md:grid-cols-2 rounded-b-3xl">
          <div className="grid-principal">
            <h1 className="font-bold sub-titulo">
              Primera sesión <b className="text-fisio">50% MENOS!</b>
            </h1>
            <p className="texto-normal my-8">
              Acude a tu primera sesión y obtendrás un 50% de descuento al
              mencionar que viste el anuncio en la página web a uno de los
              terapeutas físicos de FISIOVIVE.​
            </p>

            <Link
              activeClass="active"
              className="contacto nav-btn"
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="texto-normal bg-white rounded-lg border-2 border-fisio p-2 hover:bg-fisio hover:text-white">
                Agenda una cita
              </button>
            </Link>
          </div>

          <div className="grid-principal row-span-2">
            <h1 className="font-bold sub-titulo pb-2">
              ¿Qué es <b className="text-fisio">GYROTONIC?</b>
            </h1>
            <div className="grid place-items-center h-5/6">
              <iframe
                data-src="https://www.youtube.com/embed/YPdYFFYobtg?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=0&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                src="https://www.youtube.com/embed/YPdYFFYobtg?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=0&autohide=0&loop=0&showinfo=0&rel=0&enablejsapi=0"
                height="100%"
                width="100%"
                frameBorder={0}
                title="External YouTube"
                aria-label="External YouTube"
                data-testid="youtube"
                allowFullScreen
              />
            </div>
          </div>
          <div className="grid-principal">
            <h1 className="font-bold sub-titulo">
              Cada persona es diferente, con necesidades y actividades
              diferentes.
            </h1>
            <p className="texto-normal my-8">
              FISIOVIVE es una clínica diseñada para ti, con un ambiente en
              armonia con tu vida diaria donde podrás relajarte, rehabilitarte o
              aprender a prevenir lesiones derivadas de tu trabajo o profesión.
              ¡Ven y conócenos! Con gusto te atenderemos.
            </p>
            <Link
              activeClass="active"
              className="contacto nav-btn"
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="texto-normal bg-white rounded-lg border-2 border-fisio p-2 hover:bg-fisio hover:text-white">
                Contáctanos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <button onClick={() => Scroll.animateScroll.scrollToTop()}>Arriba</button> */}

      <Navigation />
    </>
  );
}

export default Home;
