import NextAuth, { Awaitable, DefaultSession, Session } from "next-auth"
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

interface SessionProps {
  session: Session;
  token: JWT;
  user: AdapterUser;
}

declare module "next-auth" {
    interface Session {
      user: {
        name: string;
        email: string;
        username?: string;
        image: string;
      };
    }
  }

const handler = NextAuth({  
	providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '', 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
    ],
    callbacks: {
      async session({ 
        session, 
        token, 
        user,
      }: SessionProps): Promise<Session | DefaultSession> {
        // Send properties to the client, like an access_token and user id from a provider.
        if (session.user?.email) {
          const splitedEmail = session.user.email.split('@');
          const username = splitedEmail[0];
          console.log(username);
          session.user.username = username;
        }
        return session;  // Ensure there's always a return value
      }
    }
});

export { handler as GET, handler as POST };