import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const BASE_URL = process.env.BASE_URL ;

const customFetch = async (url: string, options: any = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  })      
  if (!response.ok) {
    const err = await response.json();
    console.log('err', err);
    if ( err.status === 401 ) {
      const refresh_token = cookies().get('refresh_token');
        const response = await fetch(`${BASE_URL}${url}`, {
          ...options,
          headers: {
            ...options.headers,
            'Content-Type': 'application/json',
          },
        })
        return response;
      }
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