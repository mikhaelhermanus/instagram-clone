import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img 
        className='h-16 rounded-full border p-[2px]'
        src='https://campuspedia.id/diskusi/img/profile.png' 
        alt='user-image'/>
        <div className='flex-1 ml-4'>
                <h2 className='font-bold'>codewithmikhael</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram clone</h3>
        </div>
        <button className='font-semibold text-blue-400 text-sm'>Sign Out</button>
    </div>
  )
}
