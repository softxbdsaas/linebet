// app/api/auth/[...nextauth]/route.js
import { authKey } from "@/constants/authKey";
import { setCookie } from "@/utils/cookies-info";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      const newUser = {
        email: user?.email,
        name: user?.name,
        profileURL: user?.image,
      };

      const response = await fetch(
        "https://express-auth-wheat.vercel.app/api/auth/social-media-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      const result = await response.json();
      if (result.status == true) {
        setCookie(authKey, result.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Use secure cookies in production
          expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour expiration
        });
        return true;
      } else {
        return false;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
