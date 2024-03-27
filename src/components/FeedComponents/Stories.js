import React, { useState, useEffect } from 'react'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import StoryItem from './StoryItem'
export default function Stories() {
    const [storyUsers, setStoryUsers] = useState([])

    useEffect(() => {
        const storyUsers = minifaker.array(20, (i) => (
            {
                username: minifaker.username({ locale: "en" }).toLowerCase(),
                img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
                id: i
            }
        ));
        setStoryUsers(storyUsers)
        console.log(storyUsers, 'line 16')
    }, [])
    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none' >
            {storyUsers.map(user => (
                <StoryItem key={user.id} user={user} />
            ))}
        </div>
    )
}
