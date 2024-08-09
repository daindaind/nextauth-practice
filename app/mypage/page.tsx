'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

const MyPage = () => {
    const { data, status } = useSession();
    console.log(data?.user);
    
    return (
        <div className='flex flex-col gap-5 p-7'>
            <div className='flex flex-row items-center gap-2'>
                {data?.user?.image ? <Image alt='Profile' src={data?.user?.image} width={100} height={100} className='rounded-full'/>
                : <div className='rounded-full bg-gray-300 w-[100px] h-[100px]' />}
                <div className='flex flex-col'>
                    <p className='font-bold text-gray-800 text-2xl ml-7'>{data?.user?.username}</p>
                    <p className='font-normal text-gray-400 text-lg ml-7'>{data?.user?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default MyPage