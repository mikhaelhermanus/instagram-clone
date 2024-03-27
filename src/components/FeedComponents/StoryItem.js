import React from 'react'

export default function StoryItem(props) {
    const { user } = props
    const {username, img}= user
    return (
        <div>
            <img className='h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out' src={img}/>
            <p className='text-xs w-14 truncate'>{username}</p>
        </div>
    )
}
