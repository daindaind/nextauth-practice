"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
	const { data, update, status } = useSession();
	const currentPath = usePathname();


	return (
		<div className='flex flex-row p-4'>
			<p className='text-gray-900 text-2xl font-bold'>LOGO</p>
			{!data ? 
				(<div className='flex flex-row items-center gap-5 ml-auto'>
					<Link href='/'>
						<p className={currentPath === '/' ? 'text-sky-500' : 'text-gray-800 hover:text-sky-500'}>홈</p>
					</Link>
					<Link href='/search'>
						<p className={currentPath === '/search' ? 'text-sky-500' : 'text-gray-800 hover:text-sky-500'}>서치</p>
					</Link>
					<button className='text-gray-800 hover:text-sky-500' onClick={() => signIn()}>로그인</button>
				</div>
				): (
					<div className='flex flex-row items-center gap-5 ml-auto'>
						<Link href='/'>
							<p className={currentPath === '/' ? 'text-sky-500' : 'text-gray-800 hover:text-sky-500'}>홈</p>
						</Link>
						<Link href='/search'>
							<p className={currentPath === '/search' ? 'text-sky-500' : 'text-gray-800 hover:text-sky-500'}>서치</p>
						</Link>
						<Link href='/post'>
							<p className={currentPath === '/post' ? 'text-sky-500' : 'text-gray-800 hover:text-sky-500'}>작성</p>
						</Link>
						<button className='text-gray-800 hover:text-sky-500' onClick={() => signOut()}>로그아웃</button>
						<div className='flex flex-row items-center gap-2'>
							<Link href='mypage'>
								{data?.user?.image ? <Image alt='Profile' src={data?.user?.image} width={30} height={30} className='rounded-full'/>
									: <div className='rounded-full bg-gray-300 w-[30px] h-[30px]' />}
							</Link>
						</div>
					</div>
				)}
		</div>
	);
};

export default Navbar;