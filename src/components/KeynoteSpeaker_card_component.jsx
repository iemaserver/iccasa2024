import React from 'react'

export const KeynoteSpeaker_card_component = (props) => {
  return (
    <div className='w-[480px] h-[267px] keynoteSpeaker-card-component-Main font-sofia'>



      {/* THE IMAGE */}
      <div className='w-[181px] h-[212px] frame'>
        <img src={props.image} alt="" />
      </div>

      <div className=' text-base flex flex-col h-[80.5%] w-[220px] ml-4'>

        {/* THE BOLD WRITING PART  */}
        <h1 className=' font-bold text-lg'>{props.bold}</h1>

        {/* THE NORMAL WRITING PART */}
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.line3}</p>
        <p>{props.line4}</p>
      </div>

    </div>
  )
}
