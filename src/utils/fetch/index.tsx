import { cookies } from 'next/headers'
const BASE_URL = process.env.BASE_URL ;


const customFetch = (url: string, options: any) => {
  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
    Authorization: `Bearer ${cookies().get('token')}`,
  })
};



export default customFetch;