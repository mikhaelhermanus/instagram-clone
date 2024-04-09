import React, { useState, useEffect } from 'react'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import StoryItem from './StoryItem'
import { useSession } from 'next-auth/react'
export default function Stories() {
    const [storyUsers, setStoryUsers] = useState([])
    const {data: session} = useSession()
    useEffect(() => {
        const storyUsers = minifaker.array(20, (i) => (
            {
                name: minifaker.username({ locale: "en" }).toLowerCase(),
                image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
                id: i
            }
        ));
        setStoryUsers(storyUsers)
    }, [])
    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none' >
            {session && (
                <StoryItem 
                user={session.user}
                isUser
                />
            )}
            {storyUsers.map(user => (
                <StoryItem key={user.id} user={user} />
            ))}
        </div>
    )
}
