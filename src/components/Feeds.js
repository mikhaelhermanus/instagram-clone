"use client";
import MiniProfile from './FeedComponents/MiniProfile';
import Posts from './FeedComponents/Posts';
import Stories from './FeedComponents/Stories'
export default function Feeds() {
    return (
        <main className='grid grid-cols-1 md: grid-cols-3 md:max-w-6xl mx-auto'>
            <section className='md: col-span-2'>
                <Stories />
                <Posts />
            </section>
            <section className='hidden md:inline-grid md: col-span-1'>
              <div className='fixed w-[380px]'>
                <MiniProfile/>
              </div>
                {/* suggestion */}
            </section>

        </main>
    )
}