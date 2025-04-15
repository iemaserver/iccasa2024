import React from 'react'

export const KeynoteSpeaker_card_component = (props) => {
  return (
    <div className='w-full h-auto lg:w-[450px] lg:h-[267px] keynoteSpeaker-card-component-Main font-sofia'>



      {/* THE IMAGE */}
      <div className='w-full h-auto lg:w-[181px] lg:h-[220px] frame'>
        <img src={props.image} alt="" />
      </div>

      <div className='w-full text-base flex flex-col lg:h-[80.5%] lg:w-[200px] lg:ml-4'>

        {/* THE BOLD WRITING PART  */}
        <h1 className='text-md font-bold lg:text-lg'>{props.bold}</h1>

        {/* THE NORMAL WRITING PART */}
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.line3}</p>
        <p>{props.line4}</p>
      </div>

    </div>
  )
}
