import React from 'react'
import Image from "next/image";
import Germany from 'public/assets/svgs/Germany.svg'
import Ukraine from 'public/assets/svgs/Ukraine.svg'

const CardHeader = () => {
  return (
    <div className="flex justify-between items-center">
          <div className="flex gap-2 xs:gap-3">
            <div className="w-8 h-8 xs:w-12 flex justify-center items-center xs:h-12 rounded-full bg-[#131315]">
              <p className="text-base xs:text-lg font-medium text-white">FT</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm xs:text-base font-medium text-[#EEF0F1]">Fellow Traveler</p>
              <p className="text-xs xs:text-sm font-normal text-[#EDF3FDB0]">traveleremail@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-1 xs:gap-2">
            <Image width={32} height={32} src={Germany} alt="Germany" className="w-6 h-6 xs:w-8 xs:h-8" />
            <Image width={32} height={32} src={Ukraine} alt="Ukraine" className="w-6 h-6 xs:w-8 xs:h-8" />
          </div>
        </div>
  )
}

export default CardHeader