import React from 'react'
import CurrentTime from './CurrentTime'

const TimeBox = () => {
  return (
    <div className='flex bg-black px-3 py-3 justify-between rounded-2xl w-full'>
      <div className='flex flex-col gap-3'>
        
      <CurrentTime/>
      <span className='text-base text-gray-400'>Now -</span>
      </div>
    </div>
  )
}

export default TimeBox