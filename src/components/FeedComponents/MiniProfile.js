'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
export default function MiniProfile() {
  const { data: session } = useSession()
  console.log(session, 'line 5')
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        className='h-16 rounded-full border p-[2px]'
        src={session?.user?.image}
        alt='user-image' />
      <div className='flex-1 ml-4'>
        <h2 className='font-bold'>{session?.user.name}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram clone</h3>
      </div>
      <button 
      onClick={signOut}
      className='font-semibold text-blue-400 text-sm'>Sign Out</button>
    </div>
  )
}
