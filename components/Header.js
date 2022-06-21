import React from 'react'
import Link from 'next/link'

import { AiOutlineHome } from "react-icons/ai";
import { GiMuscleUp } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";

function Header() {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="flex justify-between items-center w-full h-[60px] bg-blue-400 px-5">
        <Link href="/">
          <div>
            <AiOutlineHome className="cursor-pointer" fontSize={40} color="white" />
          </div>
        </Link>
        <Link href="/sport">
          <div>
            <GiMuscleUp className="cursor-pointer" fontSize={40} color="white" />
          </div>
        </Link>
        <Link href="/food">
          <div>
            <IoFastFoodOutline className="cursor-pointer" fontSize={40} color="white" />
          </div>
        </Link>
        <Link href="/planning">
          <div>
            <BsJournalBookmark className="cursor-pointer" fontSize={35} color="white" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header