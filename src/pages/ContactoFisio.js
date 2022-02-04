import React from "react";
import logoChico from "../img/logo/chico/logo-chico.png";
import { Link } from "react-router-dom";
import TarjContacto from "../components/TarjContacto";
import cuerpo from "../img/logo/logo-fb.png";

function ContactoFisio() {
  const wa = "2224977501";
  const correo = "cesarr.vilchis@hotmail.com";
  const tel = "2224977501";

  return (
    <>
      <div className="fixed top-0 w-screen">
        <nav
          className="flex justify-between items-center h-16 bg-fisio text-white relative shadow-sm font-sans"
          role="navigation"
        >
          <img width="60" alt="logo" src={logoChico} className=" ml-4" />
          <Link to="/" className="nav-btn mr-4">
            Inicio
          </Link>
        </nav>
      </div>
      {/* <div className="h-16"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-fit">
        <div className="mt-4 mx-4 h-5/6">
          <div className="bg-fisio p-2 rounded-xl">
            <h1 className="font-bold text-white uppercase text-xl md:text-2xl xl:text-3xl">
              FisioTerapeuta
            </h1>
            <h1 className="text-white text-xl md:text-2xl xl:text-3xl">
              Lic. Cesar Vilchis
            </h1>
          </div>
          <div className="bg-gray-300 rounded-xl p-2 mt-2">
            <p>
              <b>Teléfono:</b>
              <br />
              {tel}
            </p>

            <p>
              <b>Correo:</b>
              <br />
              {correo}
            </p>
            <p>
              <b>Dirección:</b>
              <br />
              Atlixcáyotl 3248, San Martinito, 72820 San Andŕes Cholula, Pue.
            </p>
          </div>
          <TarjContacto wa={wa} correo={correo} tel={tel} />
          <div className="h-full w-full grid place-items-center">
            <iframe
              className="h-full w-full"
              height="150"
              width="230"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3772.071155832821!2d-98.25219695211487!3d19.01658593642202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb62cacd3a73ae8c0!2sPlaza%20W!5e0!3m2!1ses-419!2smx!4v1642826955621!5m2!1ses-419!2smx"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="top-0 right-0 absolute">
            <img
              height="150"
              width="230"
              alt="cuerpo"
              src={cuerpo}
              className="full"
            />
          </div>
        </div>
      </div>
      <div className="h-8"></div>
    </>
  );
}

export default ContactoFisio;
