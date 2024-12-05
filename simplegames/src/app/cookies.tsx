// "use server"

import { cookies } from 'next/headers';

export const HandleSetCookie = (username) => {
    cookies().set('username', username, { path: '/', maxAge: 60 * 60 * 24 * 7 }); // Cookie expires in 7 days
  };