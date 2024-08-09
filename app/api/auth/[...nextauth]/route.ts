import NextAuth  from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({  
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '', 
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
		}),
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID || '', 
			clientSecret: process.env.KAKAO_CLIENT_SECRET || ''
		})
	],
	callbacks: {
		session({ session}) {
			const user = session?.user;
			if (user) {
				session.user = {
					...user,
					email: user.email?.split('@')[0]
				};
			}
			return session;
		},
	},
	pages: {
		signIn: '/login',
	}
}
);

export { handler as GET, handler as POST };