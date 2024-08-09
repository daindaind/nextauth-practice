import NextAuth, {DefaultSession} from "next-auth";
import { UserInfo } from "./user";

declare module "next-auth" {
    interface Session {
        user: UserInfo
    }
}