import React from "react";
import Image from 'next/image'
import "../app/globals.css"

const AboutDescription = () => {
    return (
        <>

            <div className="bgWrap">
                <Image
                    alt="BG"
                    src="https://res.cloudinary.com/duybxe2k2/image/upload/v1702850776/Portafolio%20UDD/website_ral57e.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            < div className="flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-3xl mb-5 font-bold
bg-gray-200 p-2 rounded opacity-90 m-5 text-center">Ivón Ñancupil Miranda</h1>
                </div>
                <div className="text-xl px-5  bg-gray-200 p-4 rounded opacity-90 text-center m-5">
                    <h3 className="p-2"><b> Experiencia:</b></h3>
                    <ul className="text-justify">
                        <li> <b>Tecnólogo Médico con mención en Imagenología</b>: Destaco la modernización del servicio de Tomografía Computada donde me desempeño, llevándolo desde una agenda en papel y visualización en placas de las imágenes a la implementación de un sistema Integrado en Salud y PACS totalmente automatizado y digital. Esto permite acceder desde cualquier lugar a los exámenes realizados y gestionar la agenda. </li>

                        <li className="p-2"> <b>TENS en Administración de Empresas</b>: En 2019 asumí el desafío de administrar el servicio donde trabajo, por lo que me perfeccioné en el ámbito de la administración y las finanzas. Llevando un registro metódico de los procesos y datos para mejorar la eficiencia de los recursos. </li>

                        <li className="p-2"> <b>Desarrollador Web Full Stack</b>: Actualmente y en paralelo a mis otras profesiones, me encuentro incursionando en el mundo del desarrollo web con la motivación de poder generar soluciones a diferentes problemáticas a través de la tecnología. </li>

                    </ul>
                </div>

                <p className="text-xl px-5 bg-gray-200 p-4 rounded opacity-90 text-center m-5">
                    Soy una persona proactiva, metódica, responsable y con una enorme pasión por el conocimiento y la resolución de problemas y desafíos.</p>

            </div >

        </>
    );
};

export default AboutDescription;








