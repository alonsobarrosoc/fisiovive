import React, { useState } from "react";

function Servicios() {
  const [showModalServicios, setShowModalServicios] = useState(false);
  const [showModalRehab, setShowModalRehab] = useState(false);
  const [showModalTerapia, setShowModalTerapia] = useState(false);

  return (
    <div>
      <div className="h-16" name="servicios"></div>
      <h1 className="text-center md:text-left md:ml-4 titulo text-fisio font-bold mb-4">
        Servicios
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 md:mt-8">
        {/* 1 */}
        <div className="tarjeta-servicio">
          <div className="grid place-items-center w-full h-1/2">
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              className="h-3/4"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
              >
                <path d="M3020 5109 c-260 -29 -521 -114 -740 -239 -88 -50 -120 -84 -120 -125 0 -32 32 -77 64 -90 39 -17 66 -11 127 27 75 45 248 124 347 157 183 60 293 76 532 75 184 0 230 -3 320 -23 232 -49 471 -154 660 -288 122 -87 306 -272 392 -393 242 -342 352 -759 307 -1168 -63 -584 -417 -1090 -944 -1348 -543 -265 -1185 -221 -1686 114 -380 255 -631 630 -730 1092 -20 91 -23 135 -23 320 0 186 3 229 23 320 41 193 113 378 221 570 23 41 30 63 26 85 -13 65 -85 101 -144 71 -53 -27 -176 -264 -237 -457 -150 -476 -118 -958 93 -1402 l56 -118 -735 -737 c-796 -798 -780 -780 -814 -923 -64 -273 106 -550 376 -614 122 -28 225 -16 349 42 73 34 96 56 811 770 l736 735 109 -53 c562 -268 1229 -246 1763 61 869 498 1205 1578 771 2475 -255 527 -729 902 -1301 1029 -200 44 -417 57 -609 35z m-1267 -3091 c84 -104 177 -196 285 -283 l73 -58 -150 -151 -151 -151 -217 217 -218 218 150 150 c82 82 150 150 151 150 1 0 35 -42 77 -92z m-303 -573 l215 -215 -490 -490 c-548 -548 -531 -534 -665 -534 -95 0 -162 28 -223 93 -56 60 -82 127 -82 211 0 131 -16 112 529 658 270 270 493 492 496 492 3 0 102 -97 220 -215z" />
                <path d="M3130 4648 c-339 -21 -646 -163 -896 -412 -162 -163 -272 -339 -343 -549 -56 -166 -66 -233 -66 -457 0 -190 3 -213 28 -315 148 -587 603 -1001 1196 -1086 105 -15 379 -6 476 16 277 62 510 190 710 390 218 217 350 474 400 773 21 126 16 405 -9 517 -63 278 -189 509 -390 711 -299 299 -675 440 -1106 412z m353 -218 c423 -95 757 -387 902 -790 88 -245 88 -563 -1 -812 -32 -88 -102 -225 -151 -292 l-35 -49 -38 71 c-20 40 -57 97 -81 129 -83 107 -254 221 -379 253 -25 6 -51 13 -58 15 -8 3 -3 20 19 55 63 103 72 150 77 407 5 277 -4 342 -59 452 -125 250 -426 344 -684 214 -76 -39 -169 -138 -210 -225 -48 -101 -58 -190 -53 -456 5 -240 18 -302 77 -391 17 -25 28 -48 26 -52 -3 -4 -22 -10 -42 -14 -21 -4 -68 -20 -106 -35 -162 -70 -293 -191 -378 -354 l-37 -69 -35 49 c-92 126 -172 321 -202 488 -19 114 -19 308 0 422 96 546 556 964 1105 1002 108 8 265 0 343 -18z m-110 -520 c57 -29 112 -86 137 -144 20 -44 37 -136 25 -136 -4 0 -36 16 -71 36 -91 51 -120 49 -188 -14 -82 -74 -132 -95 -248 -100 l-98 -4 0 54 c0 71 25 163 56 211 27 41 96 95 147 114 54 21 184 12 240 -17z m96 -480 l74 -42 -5 -92 c-6 -109 -30 -172 -90 -233 -117 -120 -316 -118 -429 4 -57 62 -80 118 -82 206 l-2 72 110 6 c125 7 188 27 281 88 33 21 61 37 64 36 3 -1 38 -21 79 -45z m-329 -868 c0 -231 3 -241 65 -262 30 -10 41 -9 73 7 54 26 61 56 61 276 l1 187 108 0 c191 0 311 -47 432 -169 77 -78 118 -145 142 -236 l13 -47 -44 -38 c-105 -91 -292 -183 -458 -226 -133 -35 -363 -44 -503 -20 -188 33 -367 110 -519 223 -71 54 -73 56 -68 91 13 76 74 182 150 257 120 119 234 163 430 164 l117 1 0 -208z" />
                <path d="M1879 4561 c-39 -39 -40 -89 -1 -131 37 -42 78 -48 121 -18 19 13 39 36 44 51 32 98 -90 171 -164 98z" />
              </g>
            </svg>
          </div>
          <h1 className="titulo-servicio">Sesiones personalizadas</h1>

          <div className="grid place-items-center w-full mt-6 h-1/4">
            <button
              className="btn-servicio"
              type="button"
              onClick={() => setShowModalServicios(true)}
            >
              Click para más información
            </button>
          </div>
          {showModalServicios ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Sesiones personalizadas
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalServicios(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      Cada plan de tratamiento es diseñado de acuerdo a las{" "}
                      <b>necesidades de cada paciente</b> ya que cada uno viene
                      con diferentes patologías o padecimientos. Esto tiene la
                      finalidad de <b>rehabilitar al paciente</b> para que pueda
                      volver a la funcionalidad y reintegrarse a sus actividades
                      de oficio y vida diaria.
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-fisio background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalServicios(false)}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>

        {/* 2 */}
        <div className="tarjeta-servicio">
          <div className="grid place-items-center w-full h-1/2">
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              className="h-1/2"
              viewBox="0 0 500.000000 500.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
              >
                <path d="M3055 4813 c-11 -2 -56 -11 -100 -19 -199 -38 -465 -153 -642 -277 -48 -34 -138 -111 -198 -172 -232 -231 -373 -505 -450 -869 -15 -70 -35 -132 -54 -167 -133 -242 -254 -630 -271 -869 -5 -69 -16 -174 -24 -235 -54 -392 -64 -1043 -26 -1585 13 -182 27 -230 83 -288 54 -57 102 -77 187 -77 64 0 82 4 122 27 61 37 105 91 124 155 12 43 13 72 5 170 -21 244 -33 652 -26 893 3 135 9 254 11 266 5 20 7 21 62 8 31 -8 96 -14 144 -14 l86 0 6 -37 c3 -21 11 -78 16 -128 60 -507 198 -1121 279 -1232 108 -149 352 -128 435 38 38 78 35 135 -18 320 -53 186 -116 483 -150 714 -26 177 -68 527 -63 531 1 2 52 8 112 14 143 14 222 34 320 79 110 51 184 121 232 218 34 69 38 85 41 175 6 131 -14 211 -88 363 -62 129 -166 282 -277 410 -38 44 -86 112 -106 150 -118 224 -330 356 -579 359 -49 1 -88 5 -88 9 0 15 43 92 92 165 95 141 248 281 402 367 137 77 343 143 501 161 127 14 195 82 195 194 0 119 -78 191 -207 189 -37 -1 -77 -3 -88 -6z m-200 -2154 c49 -97 68 -174 52 -208 -16 -33 -103 -69 -188 -78 -57 -6 -61 -5 -56 13 61 200 129 360 148 349 5 -4 25 -38 44 -76z" />
                <path d="M3027 4355 c-132 -36 -275 -151 -331 -266 -103 -212 -64 -451 99 -614 205 -205 541 -201 743 9 199 207 198 529 -2 730 -68 68 -152 117 -241 141 -71 18 -202 18 -268 0z" />
              </g>
            </svg>
          </div>
          <h1 className="titulo-servicio">Rehabilitación</h1>

          <div className="grid place-items-center w-full mt-6 h-1/4">
            <button
              className="btn-servicio"
              type="button"
              onClick={() => setShowModalRehab(true)}
            >
              Click para más información
            </button>
          </div>
          {showModalRehab ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Rehabilitación</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalRehab(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      La rehabilitación y la habilitación son procesos
                      destinados a permitir que las personas con discapacidad
                      alcancen y mantengan un nivel óptimo de desempeño físico,
                      sensorial, intelectual, psicológico y/o social. Abarca un
                      amplio abanico de actividades, como atención médica de
                      rehabilitación, fisioterapia, y demás profesiones
                      generando un grupo multidisciplinario para apoyar al
                      paciente en su proceso de rehabilitación.
                      (www.who.int/disabilities, OMS, 2015)
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-fisio background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalRehab(false)}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>

        {/* 3 */}
        <div className="tarjeta-servicio">
          <div className="grid place-items-center w-full h-1/2">
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              className="h-1/2"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
              >
                <path d="M2462 5105 c-211 -48 -386 -216 -448 -430 -18 -65 -24 -180 -11 -261 l7 -51 -127 -6 c-388 -18 -685 -205 -843 -531 -63 -129 -68 -154 -134 -563 -44 -274 -53 -349 -45 -377 6 -20 35 -65 65 -101 l55 -65 -58 0 c-81 0 -175 -24 -263 -68 -110 -53 -232 -177 -288 -292 -74 -149 -72 -115 -72 -1137 l0 -913 -90 0 c-71 0 -99 -4 -130 -20 -45 -23 -80 -80 -80 -130 0 -50 35 -107 80 -130 39 -20 55 -21 380 -18 324 3 340 4 366 24 50 37 69 72 69 124 0 52 -19 87 -69 124 -22 17 -45 22 -127 24 l-99 4 0 597 c0 659 0 654 63 747 17 27 51 63 74 80 44 34 129 71 139 61 4 -3 -14 -172 -39 -376 -50 -401 -50 -416 0 -463 41 -40 66 -45 242 -59 l160 -13 3 -392 c3 -379 4 -394 24 -420 11 -15 33 -37 48 -48 27 -21 39 -21 669 -24 611 -2 644 -1 677 16 19 11 44 31 55 46 19 26 20 44 23 361 l3 333 30 6 c17 3 44 16 61 27 58 41 58 45 58 554 l0 466 683 -3 682 -3 67 -33 c77 -38 130 -92 167 -171 l26 -56 3 -617 3 -618 -93 0 c-147 0 -203 -42 -203 -150 0 -67 20 -102 75 -131 32 -17 63 -19 368 -19 314 0 335 1 372 20 45 23 80 80 80 130 0 50 -35 107 -80 130 -31 16 -59 20 -130 20 l-90 0 0 913 c0 1021 2 988 -71 1137 -83 169 -260 307 -444 345 -38 8 -119 15 -178 15 -94 0 -108 2 -113 18 -29 88 -65 129 -600 682 -459 476 -542 567 -528 575  146 87 248 222 290 385 22 88 15 250 -16 337 -61 174 -201 309 -387 374 -77 27 -226 34 -311 14z m264 -318 c174 -88 219 -317 92 -462 -22 -25 -64 -58 -92 -73 -70 -36 -188 -38 -257 -4 -149 73 -215 250 -147 392 30 63 48 84 100 124 82 62 208 72 304 23z m-635 -743 c173 -30 341 -102 483 -207 40 -30 292 -282 613 -615 502 -519 544 -565 538 -590 -7 -31 -30 -52 -57 -52 -10 0 -107 60 -216 133 -665 449 -650 440 -700 444 -52 5 -97 -18 -136 -70 -21 -28 -21 -39 -24 -503 l-3 -474 -169 0 -170 0 10 26 c15 39 12 158 -6 210 -8 25 -110 212 -225 415 l-210 369 25 117 c31 140 32 187 6 231 -55 89 -172 96 -242 14 -34 -41 -106 -376 -91 -425 5 -17 110 -207 232 -421 145 -257 221 -400 221 -418 0 -38 -40 -78 -79 -78 -38 0 -38 0 -419 453 -240 285 -308 372 -305 390 2 12 23 146 48 299 56 346 76 407 171 528 151 192 410 274 705 224z m1121 -1530 c327 -222 365 -240 481 -230 83 6 159 39 221 96 l45 42 148 -4 c144 -3 150 -4 215 -36 118 -58 187 -163 196 -299 l5 -73 -74 35 c-136 64 -140 65 -886 65 l-673 0 0 306 c0 270 2 305 15 300 9 -3 147 -94 307 -202z m-2252 -101 c-2 -28 -39 -295 -42 -297 -1 -2 -41 -10 -87 -19 -46 -9 -117 -32 -158 -52 l-76 -35 5 73 c10 156 104 276 251 322 47 15 107 19 107 8z m407 -150 c54 -65 104 -126 112 -135 13 -17 6 -18 -121 -18 l-134 0 17 133 c10 72 18 133 18 135 3 8 18 -9 108 -115z m1223 -822 l0 -369 -42 5 c-24 3 -355 30 -735 62 -381 32 -695 59 -697 62 -4 4 59 540 69 587 l5 22 700 0 700 0 0 -369z m-852 -597 l102 -7 0 -268 0 -269 -150 0 -150 0 0 281 0 282 48 -6 c26 -4 93 -9 150 -13z m600 -50 l102 -7 0 -243 0 -244 -150 0 -150 0 0 256 0 257 48 -6 c26 -4 93 -9 150 -13z" />
              </g>
            </svg>
          </div>
          <h1 className="titulo-servicio">Terapia Física</h1>
          <div className="grid place-items-center w-full mt-6 h-1/4">
            <button
              className="btn-servicio"
              type="button"
              onClick={() => setShowModalTerapia(true)}
            >
              Click para más información
            </button>
          </div>
          {showModalTerapia ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Terapia Física</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalTerapia(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      Es el conjunto de medidas sociales, educativas, y
                      profesionales destinadas restituir al paciente
                      discapacitado la mayor capacidad e independencia posible.
                      De acuerdo a la CIF se conciben como una interacción
                      dinámica entre los estados de salud y los factores
                      contextules, tanto personales como ambientales, lo que
                      implica la participación activa de la persona a la que
                      concierne su propia rehabilitación y el deber de la
                      sociedad con las personas discapacitadas. Es por eso que
                      en FISIOVIVE nos importa tu rehabilitación y prevensión.
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-fisio background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalTerapia(false)}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Servicios;
