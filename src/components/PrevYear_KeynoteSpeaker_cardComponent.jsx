import React from 'react'

export const PrevYear_KeynoteSpeaker_cardComponent = (props) => {
  return (
    <div className='w-full h-auto flex items-center lg:w-[380px] lg:h-[197px] keynoteSpeaker-card-component-Main font-sofia rounded-[6rem]'>



      {/* THE IMAGE */}
      <div className='w-full h-auto lg:w-[120px] lg:h-[120px] rounded-full frame'>
        <img src={props.image} alt="" />
      </div>

      <div className='w-full text-base flex flex-col justify-center lg:h-[80.5%] lg:w-[260px] lg:ml-4'>

        {/* THE BOLD WRITING PART  */}
        <h1 className='text-md font-bold lg:text-lg'>{props.bold}</h1>

        {/* THE NORMAL WRITING PART */}
        <p>{props.line1}</p>
        <p>{props.line2}</p>
      </div>

    </div>
  )
}
