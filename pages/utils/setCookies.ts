import { serialize, CookieSerializeOptions } from 'cookie';
import { NextApiResponse } from 'next';
 
/**
 * This sets `cookie` using the `res` object
 */
export const setCookie = (
  res: NextApiResponse,
  accessToken: string,
  refreshToken: string,
  access_options: CookieSerializeOptions = { path: '/', httpOnly: true, sameSite: 'lax', expires: new Date(Date.now() + 15 * 60 * 1000) },
  refresh_options: CookieSerializeOptions = { path: '/', httpOnly: true, sameSite: 'lax', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }
) => {

  accessToken = String(accessToken);
  refreshToken = String(refreshToken);


  res.setHeader('Set-Cookie', serialize('access_token', accessToken, access_options));
  res.setHeader('Set-Cookie', serialize('refresh_token', refreshToken, refresh_options));
}

