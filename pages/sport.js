import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiMuscleUp } from "react-icons/gi";

function sport() {
  return (
    <div className="z-0 mb-20">
      <Header />

      <div className="py-5 ml-3">
        <h1 className="text-2xl font-light">Les Entrainements</h1>
      </div>

      <Link href="/sport/corps">
        <div className="relative h-[120px] w-[93%] bg-blue-400 mx-auto rounded-lg pt-3 pl-4">
          <h2 className="text-lg text-white">Entrainement - Corps Entier</h2>
          <span className="text-white font-light">Pectoraux - Abdominaux - Bras - Dos...</span>

          <div className="absolute bottom-3 right-3">
            <BsFillArrowRightCircleFill fontSize={30} color="white" />
          </div>
        </div>
      </Link>

      <div className="w-full mt-5 grid grid-cols-2 gap-y-5 place-items-center justify-self-center">
        <Link href="/sport/pectoraux">
          <div className="bg-blue-900 w-[88%] h-[130px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <GiMuscleUp fontSize={40} color="white" />
            </div>
            <h2 className="text-white text-xl text-center">Pectoraux</h2>
          </div>
        </Link>
        <Link href="/sport/bras">
          <div className="bg-blue-900 w-[88%] h-[130px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <GiMuscleUp fontSize={40} color="white" />
            </div>
            <h2 className="text-white text-xl text-center">Bras</h2>
          </div>
        </Link>
        <Link href="/sport/abdominaux">
          <div className="bg-blue-900 w-[88%] h-[130px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <GiMuscleUp fontSize={40} color="white" />
            </div>
            <h2 className="text-white text-xl text-center">Abdominaux</h2>
          </div>
        </Link>
        <Link href="/sport/jambes">
          <div className="bg-blue-900 w-[88%] h-[130px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <GiMuscleUp fontSize={40} color="white" />
            </div>
            <h2 className="text-white text-xl text-center">Jambes</h2>
          </div>
        </Link>
        <Link href="/sport/epaules">
          <div className="bg-blue-900 w-[88%] h-[130px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <GiMuscleUp fontSize={40} color="white" />
            </div>
            <h2 className="text-white text-xl text-center">Épaules</h2>
          </div>
        </Link>
        <Link href="/sport/dos">
          <div className="bg-blue-900 w-[88%] h-[130px] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              <GiMuscleUp fontSize={40} color="white" />
            </div>
            <h2 className="text-white text-xl text-center">Dos</h2>
          </div>
        </Link>
      </div>

   


    </div>
  )
}

export default sport