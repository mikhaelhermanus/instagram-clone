"use client";
import { useSession } from 'next-auth/react';
import MiniProfile from './FeedComponents/MiniProfile';
import Posts from './FeedComponents/Posts';
import Stories from './FeedComponents/Stories'
import Suggestion from './FeedComponents/Suggestion';
export default function Feeds() {
  const { data: session } = useSession();
  return (
    <main className={`grid ${session ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto" : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"}  `}>
      <section className='md: col-span-2'>
        <Stories />
        <Posts />
      </section>
      <section className='hidden md:inline-grid md: col-span-1'>
        <div className='fixed w-[380px]'>
          <MiniProfile />
          <Suggestion />
        </div>

      </section>

    </main>
  )
}
