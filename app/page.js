
import Image from 'next/image'
import "../app/globals.css"

export default function Home() {
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
bg-gray-200 p-2 rounded opacity-90 m-5 text-center">Hola! me llamo Ivón, bienvenid@ a mi portafolio</h1>
        </div>
        <div className="text-xl px-5 bg-gray-200 p-4 rounded opacity-90 text-center m-5">
          <p >
            Soy desarrollador web Full Stack apasionada por la creación de experiencias web dinámicas y eficientes que satisfacen las necesidades de los usuarios.
          </p>
        </div>
        <div className="text-xl px-5  bg-gray-200 p-4 rounded opacity-90 text-center m-5">
          <h3 className="p-2"><b> Stack Tecnológico: MERN</b></h3>
          <ul>
            <li> <b>MongoDB</b>: Diseño bases de datos sólidas y escalables para almacenar y gestionar datos de manera eficiente.</li>
            <li> <b>Express.js</b>: Construcción de servidores y APIs RESTful que facilitan la comunicación entre el frontend y backend.</li>
            <li> <b>React.js</b>: Desarrollo de interfaces de usuario modernas y responsivas que ofrecen una experiencia fluida e intuitiva.</li>
            <li> <b>Node.js</b>: Implementación de lógica de servidor eficiente para garantizar un rendimiento óptimo en aplicaciones web.</li>
          </ul>
        </div>

        <p className="text-xl px-5 bg-gray-200 p-4 rounded opacity-90 text-center m-5">
          Explora mi perfil y proyectos para conocer más sobre mi. Siempre estoy abierta a nuevas oportunidades y desafíos emocionantes.</p>

      </div>

    </>
  )
}
