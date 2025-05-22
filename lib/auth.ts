import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // In a real app, you would check the credentials against your database
        // For this example, we'll use a hardcoded admin user
        if (credentials?.email === "admin@mbaboutique.sn" && credentials?.password === "admin123") {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@mbaboutique.sn",
            role: "admin",
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
}
