import React from 'react'

export default function Spiner() {
  return (
    <>
      <div className=' flex flex-col items-center space-y-2'>
        <div className="spinner"></div> 
        <p className='load_text text-black font-tajawal text-[20px]'>Loading...</p>
      </div>
    </>
  )
}
