import React from 'react'
import Image from 'next/image'
import "../globals.css"
import Link from 'next/link'

export default function contact() {
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
bg-gray-200 p-2 rounded opacity-90 m-5 text-center">Contáctame a través de:</h1>
        </div>
        <div className="text-xl px-5 bg-gray-200 p-4 rounded opacity-90 text-center m-5">
          <Link href="https://www.linkedin.com/in/ivonnancupilmiranda/"> Perfil de LinkedIn</Link>
        </div>
      </div>

    </>
  )
}

