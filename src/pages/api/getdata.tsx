
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(request:NextApiRequest, response:NextApiResponse) {

  response.setHeader('Access-Control-Allow-Credentials', `true`)
  response.setHeader('Access-Control-Allow-Origin', '*')
 
  
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });


}