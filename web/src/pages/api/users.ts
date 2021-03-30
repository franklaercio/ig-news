import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Frank' },
    { id: 1, name: 'Ohanna' },
    { id: 1, name: 'Olívia' }
  ];

  return response.json(users);
} 