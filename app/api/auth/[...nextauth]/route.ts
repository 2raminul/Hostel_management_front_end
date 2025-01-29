import { NextApiResponse } from "next";
import NextAuth from "next-auth/next";

//import { keyCloakAuthOptions } from "./keyCloakAuthOptions";
import { createOptions } from "./jwtAuthOptions";
//import { NextRequest } from "next/server";

//const handler = NextAuth(keyCloakAuthOptions);
//export { handler as GET, handler as POST };

const handler = async (req: any, res: NextApiResponse) =>
  NextAuth(req, res, createOptions(req));

export { handler as GET, handler as POST };
