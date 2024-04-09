import React from 'react'
import { PlusIcon } from "@heroicons/react/20/solid"
export default function StoryItem(props) {
    const { user, isUser } = props
    const {name, image}= user
    return (
        <div className='relative group cursor-pointer'>
            <img 
            className='h-14 rounded-full p-[1.5px] border-red-500 border-2 group-hover:scale-110 transition-transform duration-200 ease-out' 
            src={image}
            />
            {isUser && <PlusIcon className='h-6 absolute top-4 left-4 text-white'/>}
            <p className='text-xs w-14 truncate'>{name}</p>
        </div>
    )
}
