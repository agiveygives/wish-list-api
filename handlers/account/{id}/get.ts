import { request, response, NextFunction } from'express';

import { Users } from '../../../ts-models/Users';
import { UserDetails } from '../../../ts-models/UserDetails';

const handler = async (req: typeof request, res: typeof response, next: NextFunction) => {
  const user = await Users.findByPk(req.params.userId);

  if (user === null) {
    res.status(404)
  } else {
    const userDetails = await UserDetails.scope('current').findAll({ where: { userId: user.id } })

    if (userDetails === null || userDetails.length !== 1) {
      res.status(500)
    } else {
      res.status(200).json({
        ...user,
        details: {
          ...userDetails[0]
        }
      })
    }
  }
};

export default handler;
