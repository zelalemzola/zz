import Image from 'next/image'
import React from 'react'

const Second = () => {
  return (
    <div className='bg-black h-screen w-full flex items-center justify-center'>
        <Image src='/g.png' width={900} height={400} alt=''/>
    </div>
  )
}

export default Second