'use client';
import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Header from '@/components/Header';
export default async function signin({ }) {
    const data = await getServerSideProps()
    const { providers } = data
    return (
        <>
            <Header />
            <div className='flex justify-center space-x-7 mt-20'>
                <img
                    className='hidden object-cover rotate-6 md:inline-flex md:w-48'
                    src='https://buyfollower.net/wp-content/uploads/elementor/thumbs/instagix-banner-graphic-pqwfpe9m3cll2iz1117e474gbell65671z9k15pves.png'
                    alt='instagram-image' />
                <div>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.id} className='flex flex-col items-center'>
                            <img
                                className='w-32 object-cover'
                                src='https://smesta.kemenkopukm.go.id/storage/contents/news/cara-buka-usaha-di-instagram.jpg' />
                            <p className='text-sm italic my-10 text-center'>This app is created for learning purposes</p>
                            <button 
                            onClick={()=> signIn(provider.id, {callbackUrl : '/'})}
                            className='bg-red-400 rounded-lg p-3 text-white cursor-pointer hover:bg-red-500'>Sign In With {provider.name}</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        providers
    }
}