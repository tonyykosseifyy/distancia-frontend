import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '../utils/setCookies'
 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { access_token, refresh_token } = req.body;
  if ( !access_token || !refresh_token ) {
    res.status(400).json({
      statusCode: 400,
      message: 'Bad Request',
    });
  }
  setCookie(res, access_token, refresh_token);

  res.status(200).json({ 
    statusCode: 200,
    message: 'success',
   });
}
 
export default handler; 