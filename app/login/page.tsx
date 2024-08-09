'use client';
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const LoginPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-stone-50">
			<div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-xl p-7 px-12 min-w-[400px]">
				<h3 className="text-2xl font-bold text-gray-800 mb-3">로그인</h3>
				<input className="bg-stone-100 p-3 rounded-md w-full text-sm" placeholder="아이디" />
				<input className="bg-stone-100 p-3 rounded-md w-full text-sm" placeholder="비밀번호" />

				<p className="text-xs text-gray-400 font-semibold">이메일로 가입하기</p>

				<div className="w-full border-b-[1px] border-gray-100 mt-2 mb-2" />
				<button className="flex flex-row w-[300px] items-center p-3 rounded-lg border-gray-300 border-[1px]" 
					onClick={() => signIn('google')}
				>
					<FcGoogle size={30} />
				  <p className="text-dark-700 font-medium text-sm ml-2">구글로 시작하기</p>
				</button>
				<button className="flex flex-row w-[300px] items-center p-3 bg-[#F7E600] rounded-lg" onClick={() => signIn('kakao')}>
					<RiKakaoTalkFill size={30} color={"#3A1D1D"} />
				  <p className="text-[#3A1D1D] font-medium text-sm ml-2">카카오로 시작하기</p>
				</button>
			</div>
		</div>
	);
};

export default LoginPage;