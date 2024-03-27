import React from 'react'
import { HeartIcon, ChatBubbleLeftIcon, BookmarkIcon, FaceSmileIcon} from "@heroicons/react/24/outline"
function PostItem(props) {
    const { post } = props
    const { username, userImg, img, caption } = post
    return (
        <div className='bg-white my-7 border rounded-md'>
            {/* post Header */}
            <div className='flex items-center p-5'>
                <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={username}/>
                <p className='font-bold flex-1'>{username}</p>
                {/* <DotsHorizontalIcon /> */}
            </div>
            <img className='object-cover w-full' src={img} alt=''/>
            <div className='flex justify-between px-4 py-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn'/>
                    <ChatBubbleLeftIcon  className='btn'/>
                </div>
                <BookmarkIcon className='btn'/>
            </div>
            <p className='p-5 truncate'><span className='font-bold px-2'>{username}</span>{caption}</p>
           <form className='flex items-center p-4'>
            <FaceSmileIcon className='h-7'/>
            <input className='border-none flex-1 focus:ring-0' type='text' placeholder='Enter you comment here..'/>
            <button className='text-blue-400 font-bold'>Post</button>
           </form>
        </div>
    )
}

export default PostItem