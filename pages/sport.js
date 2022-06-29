import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import Header from '../components/Header'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { GiMuscleUp } from "react-icons/gi"

function sport() {
  return (
    <div className="z-0 mb-20">
      <Header />

      <div className="py-5 ml-3">
        <h1 className="text-2xl font-light">Les Entrainements</h1>
      </div>

      <Link href="/sport/corps">
        <div className="relative h-[120px] w-[97%] bg-blue-900 mx-auto rounded-lg pt-3 pl-4">
          <div className="flex space-x-2 items-center">
            <GiMuscleUp fontSize={20} color="white" />
            <h2 className="text-lg text-white">Entrainement - Corps Entier</h2>
          </div>
          <span className="text-white font-light">Pectoraux - Abdominaux - Bras - Dos...</span>

          <div className="absolute bottom-3 right-3">
            <BsFillArrowRightCircleFill fontSize={30} color="white" />
          </div>
        </div>
      </Link>

      <div className="mt-5 grid grid-cols-3 gap-y-5 place-items-center justify-self-center">
        <Link href="/sport/pectoraux">
          <div className="bg-blue-400 w-[90%] h-[90px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <Image src="/pectoraux.png" height="40" width="40"/>
            </div>
            <h2 className="text-white text-md text-center">Pectoraux</h2>
          </div>
        </Link>
        <Link href="/sport/bras">
          <div className="bg-blue-400 w-[90%] h-[90px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <Image src="/bras.png" height="35" width="35"/>
            </div>
            <h2 className="text-white text-md text-center">Bras</h2>
          </div>
        </Link>
        <Link href="/sport/abdominaux">
          <div className="bg-blue-400 w-[90%] h-[90px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <Image src="/abdominal.png" height="35" width="35"/>
            </div>
            <h2 className="text-white text-md text-center">Abdominaux</h2>
          </div>
        </Link>
        <Link href="/sport/jambes">
          <div className="bg-blue-400 w-[90%] h-[90px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <Image src="/jambe.png" height="35" width="35"/> 
            </div>
            <h2 className="text-white text-md text-center">Jambes</h2>
          </div>
        </Link>
        <Link href="/sport/epaules">
          <div className="bg-blue-400 w-[90%] h-[90px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <Image src="/epaule.png" height="35" width="35"/>
            </div>
            <h2 className="text-white text-md text-center">Épaules</h2>
          </div>
        </Link>
        <Link href="/sport/dos">
          <div className="bg-blue-400 w-[90%] h-[90px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <Image src="/dos-humain.png" height="35" width="35"/>
            </div>
            <h2 className="text-white text-md text-center">Dos</h2>
          </div>
        </Link>
      </div>

   


    </div>
  )
}

export default sport