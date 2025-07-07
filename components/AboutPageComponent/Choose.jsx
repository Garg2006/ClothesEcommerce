import React from 'react'

const Choose = ({heading,text}) => {
  return (
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>{heading}</b>
    <p className=' text-gray-600'>
     {text}
    </p>
  </div>
  )
}

export default Choose