'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const projects = [
  {
    title: 'Landing Page de Ventas',
    description: 'Landing Page de Ventas para impulsar las ventas a través de un catálogo en línea. Diseñada y desarrollada con HTML y CSS',
    bgCardImage: 'https://res.cloudinary.com/duybxe2k2/image/upload/v1702162109/Portafolio%20UDD/LandingPage_oz9r8y.jpg',
    urlPage: 'https://ivonnatalia1107.github.io/Landing_ventas/',
    urlCode: 'https://github.com/ivonnatalia1107/Landing_ventas.git',
    urlInsignia:"https://www.credly.com/badges/c887976e-60f1-4aba-bcd0-ea0180954560"

  },
  {
    title: 'CRUD',
    description: 'Aplicación CRUD dinámica desarrollada con HTML, CSS, JavaScript y Firebase. Tiene las funciones de Crear, Leer, Actualizar y Eliminar elementos, que son almacenados en firebase.',
    bgCardImage: 'https://res.cloudinary.com/duybxe2k2/image/upload/v1702162108/Portafolio%20UDD/CRUD_jhazo4.jpg',
    urlPage: 'https://ivonnatalia1107.github.io/Segunda_entrega_CRUD/',
    urlCode: 'https://github.com/ivonnatalia1107/Segunda_entrega_CRUD.git',
    urlInsignia:"https://www.credly.com/badges/c5ae6188-07c2-476d-b81e-df94c1463d41"
  },
  {
    title: 'Dashboard del Clima',
    description: 'Aplicación para obtener en tiempo real el clima de cualquier lugar del mundo. Desarrollada con HTML, CSS, JavaScript, Chart JS. Consume datos de la API de OpenWeatherMap.',
    bgCardImage: 'https://res.cloudinary.com/duybxe2k2/image/upload/v1702162109/Portafolio%20UDD/AppClima_qiji1i.jpg',
    urlPage: 'https://ivonnatalia1107.github.io/Proyecto_3_DashBoard/',
    urlCode: 'https://github.com/ivonnatalia1107/Proyecto_3_DashBoard.git',
    urlInsignia:"https://www.credly.com/badges/6ed0fb85-443d-4805-adb2-d5463d9f3046"
  },
  {
    title: 'App para Restaurant',
    description: 'Página Web de un servicio de comida, con navegación entre diferentes pestañas',
    bgCardImage: 'https://res.cloudinary.com/duybxe2k2/image/upload/v1702162109/Portafolio%20UDD/MenuRestaurant_gcgkz0.jpg',
    urlPage: 'https://ivonnatalia1107.github.io/proyecto-app-restaurant/',
    urlCode: 'https://github.com/ivonnatalia1107/proyecto-app-restaurant.git',
    urlInsignia:"https://www.credly.com/badges/33e937ab-3284-4c89-9d9e-5f4a8a3a3c3a"
  },
  {
    title: 'Comercio electrónico',
    description: 'Comercio electrónico desarrollado con React JS. Obtiene y guarda información desde un base de datos, está conectada con Mercado Pago y tiene registro e inicio de sesión',
    bgCardImage: 'https://res.cloudinary.com/duybxe2k2/image/upload/v1702162109/Portafolio%20UDD/ECommerce_gdkljz.jpg',
    urlPage: 'https://ivonnatalia1107.github.io/proyecto-e-commerce/',
    urlCode: 'https://github.com/ivonnatalia1107/proyecto-e-commerce',
    urlInsignia:""
  },
]

export const ProjectCard = () => {

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.1,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

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
<container className=" flex flex-col center-center " > 
      {projects.map((project, i) => (
        <div key={i} className=" flex justify-center items-center " >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className={`w-10/12 relative p-5 min-h-[250px]  border  border-gray-800 rounded shadow m-3 group`}
          >

            <div className="w-full h-full absolute top-0 left-0 rounded flex justify-center items-center ">
              <Image
                src={project.bgCardImage}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded "
              />
            </div>

            <div className="bg-gray-900 bg-opacity-50 rounded p-2 backdrop-blur-md  ">
              <h3 className="font-bold text-lg text-white">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>

            <div className="absolute hidden group-hover:flex bg-gray-900/80 w-full left-0 top-0 h-full transition-all flex-col p-3 gap-2 backdrop-blur-sm">
             <div className="flex text-justify">
              <h3 className="text-white ">
                Puedes ver mas detalles de este proyecto en los siguientes enlaces:
              </h3>
              </div>
              <div className="flex flex-row flex-wrap justify-around items-center gap-2">
                <Link href={project.urlPage} className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold py-2 px-2 rounded-xl mt-4">
                  Despliegue
                </Link>
                <Link href={project.urlCode} className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded-xl mt-4">
                  Repositorio
                </Link>
                <Link href={project.urlInsignia} className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded-xl mt-4">
                 Insignia
                </Link>
              </div>
            </div>
          </motion.div >
        </div>
      ))}
</container>
    </>

  );
};
