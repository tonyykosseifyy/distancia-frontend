import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const BASE_URL = process.env.BASE_URL ;
const FRONTEND_URL = process.env.FRONTEND_URL;


const displayTokens = () => {
  const access_token = cookies().get('access_token');
  const refresh_token = cookies().get('refresh_token');

  console.log('access_token: ', access_token);
  console.log('refresh_token: ', refresh_token);
}
const customRedirect = (url: string) => {
  redirect(`${FRONTEND_URL}${url}`);
}

const basicFetch = async (url: string, options: any = {}) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    credentials: 'include',
    mode: 'cors',
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  })
  return res.json();
}

const checkRefreshToken = async (url: string, options: any = {} ) => {
  const refresh_token = cookies().get('refresh_token');
  if ( refresh_token ) {
    const refresh_token_response = await fetch(`${BASE_URL}/auth/refresh`, {
      method: 'POST',
    })
    if ( refresh_token_response.ok ) {
      const new_response = await fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
        },
      })      
      return new_response;
    }
    customRedirect('auth/sign-in');
  }
  customRedirect('auth/sign-in');
}

const customFetch = async (url: string, options: any = {}) => {
  const response = await basicFetch(url, options);
  console.log('response from custom: ', response);
  if (response.statusCode === 401) {
      console.log('---------------------unauthorized----------------------------');
      
      return checkRefreshToken(url, options);      
  }
  return response;
};



export default customFetch;

// if cookies refresh token send a request to /refresh to get new token
    // if ( err.status === 401 ) {
    //   cookies().set({
    //     name: 'token',
    //     value: '',
    //     expires: new Date('2016-10-05'),
    //     path: '/', // For all paths
    //   })
    //   redirect('/auth/sign-in');
    // }