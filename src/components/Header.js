'use client'
import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from "@heroicons/react/20/solid"
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { modalState } from '@/app/atom/modalAtom'
export default function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter()

    return (
        <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
            <div className='flex items-center justify-between max-w-6xl mx-4 xl: mx-auto '>
                {/* Left */}
                <div className='h-24 w-24 relative hidden lg:inline-grid'>
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                        layout='fill'
                        className="object-contain "
                    />
                </div>
                <div className='h-24 w-10 relative lg:hidden'>
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
                        layout='fill'
                        className="object-contain "
                    />
                </div>
                {/* middle */}
                <div className='relative mt-1'>
                    <div className='absolute top-2 left-2 '>
                        <MagnifyingGlassIcon className='h-5 text-gray-500' />
                    </div>
                    <input type='text' placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
                </div>
                {/* right */}
                <div className='flex space-x-4 items-center'>
                    <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out ' />
                    {session ?
                        <>
                            <PlusCircleIcon 
                            onClick={()=>setOpen(true)}
                            className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out ' />
                            <img
                            onClick={signOut}
                            src={session.user.image} 
                            alt='user-image' 
                            className='h-10 rounded-full cursor-pointer hover: scale-125' />
                        </>
                        :
                        <button onClick={()=>router.push('/auth/signin')}>Sign In</button>
                    }
                </div>
            </div>
        </div>

    )
}
