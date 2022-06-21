import Head from 'next/head'
import Header from '../components/Header'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="z-0 mb-20">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="p-5">
        <span className="text-2xl font-light">Salut Lucas,</span>
        <h1 className="text-3xl mt-2">Road to The Rock le Boss</h1>
      </div>

      {/* Training */}
      <Link href="/sport">
        <div className="relative h-[120px] w-[90%] bg-blue-400 mx-auto rounded-lg pt-3 pl-4">
          <h2 className="text-xl text-white">Les Entrainements</h2>
          <span className="text-white font-light">Pectoraux - Abdominaux - Bras - Dos...</span>

          <div className="absolute bottom-3 right-3">
            <BsFillArrowRightCircleFill fontSize={30} color="white" />
          </div>
        </div>
      </Link>

      {/* Food */}
      <div className="mt-5 ml-5">
        <h2 className="text-xl">La Nutrition</h2>
      </div>

      <div className="mt-5 space-y-5">
        <Link href="/food">
          <div className="h-[60px] w-[90%] bg-blue-500 mx-auto rounded-lg flex justify-between items-center px-4">
            <div className="bg-white h-[50%] w-[10%] rounded-lg flex justify-center items-center">
              <IoFastFoodOutline color="blue" fontSize={20} />
            </div>
            <h3 className="text-white text-xl ml-1">Riz</h3>
            <span className="text-white text-sm font-light">7g de protéines - 330g...</span>
            <div>
              <BsFillArrowRightCircleFill fontSize={20} color="white" />
            </div>
          </div>
        </Link>
        <Link href="/food">
          <div className="h-[60px] w-[90%] bg-blue-500 mx-auto rounded-lg flex justify-between items-center px-4">
            <div className="bg-white h-[50%] w-[10%] rounded-lg flex justify-center items-center">
              <IoFastFoodOutline color="blue" fontSize={20} />
            </div>
            <h3 className="text-white text-xl ml-1">Poulet</h3>
            <span className="text-white text-sm font-light">60g de protéines...</span>
            <div>
              <BsFillArrowRightCircleFill fontSize={20} color="white" />
            </div>
          </div>
        </Link>
        <Link href="/food">
          <div className="h-[60px] w-[90%] bg-blue-500 mx-auto rounded-lg flex justify-between items-center px-4">
            <div className="bg-white h-[50%] w-[10%] rounded-lg flex justify-center items-center">
              <IoFastFoodOutline color="blue" fontSize={20} />
            </div>
            <h3 className="text-white text-xl ml-1">Poisson</h3>
            <span className="text-white text-sm font-light">71g de protéines...</span>
            <div>
              <BsFillArrowRightCircleFill fontSize={20} color="white" />
            </div>
          </div>
        </Link>
        <Link href="/food">
          <div className="flex justify-center">
            <button className="border border-blue-500 border-2 text-blue-500 px-4 py-2 rounded-lg text-sm hover:bg-blue-500 hover:text-white">En Savoir Plus</button>
          </div>
        </Link>
      </div>

    </div>
  )
}
