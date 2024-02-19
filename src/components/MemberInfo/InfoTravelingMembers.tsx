import React from 'react'

interface IInfoTravelingMembers {
  number: string;
  text: string;
}

const InfoTravelingMembers: React.FC<IInfoTravelingMembers> = ({number,text}) => {
  return (
    <div className='flex gap-2'>
      <div className='w-5 h-5 flex justify-center items-center rounded-full bg-[#F2F2F5]'>
        <p className='text-center text-xs font-semibold'>{number}</p>
      </div>
      <p className='font-medium text-sm'>{text}</p>
    </div>
  )
}

export default InfoTravelingMembers