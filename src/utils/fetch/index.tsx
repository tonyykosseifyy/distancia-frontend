import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const BASE_URL = process.env.BASE_URL ;

const customFetch = async (url: string, options: any) => {
  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookies().get('token')}`,
    },
  })
  .then((res) => res.json())
  .then((res) => res) 
  .catch((err) => {
    console.log('error fetch', err);
    // if cookies refresh token send a request to /refresh to get new token]
    if ( err.status === 401 ) {
      cookies().set({
        name: 'token',
        value: '',
        expires: new Date('2016-10-05'),
        path: '/', // For all paths
      })
      redirect('/auth/sign-in');
    }
    return err;  
  });
};



export default customFetch;