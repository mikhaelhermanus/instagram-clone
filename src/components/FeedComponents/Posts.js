import React from 'react'
import PostItem from './PostItem'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "codewithmikhael",
            userImg: 'https://campuspedia.id/diskusi/img/profile.png',
            img: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: "Nice Picture"
        },
        {
            id: "2",
            username: "mikhael",
            userImg: 'https://campuspedia.id/diskusi/img/profile.png',
            img: 'https://plus.unsplash.com/premium_photo-1711305772086-d45053d4bb69?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: "New Picture"
        },

    ]
    return (
        <div>
            {
                posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))
            }
        </div>
    )
}
