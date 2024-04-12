import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      //1. Condect ot the DB
      //2. Check if uder exists
      //3. If not, add user to DB
      //4. Return true to allow sign in
    },
    async session({ session }) {
      //1. Get the user from DB
      //2. Assign the user id to the session
      //3. Return session
    },
  },
};
