import { response, request, NextFunction } from'express';
import database from '../../database';
import Joi from 'joi';

import { Users } from '../../ts-models/Users';
import { UserDetails } from 'ts-models';

const thirteenYearsOld = new Date();
thirteenYearsOld.setFullYear(thirteenYearsOld.getFullYear() - 13);

const schema = Joi.object({
  username: Joi.string()
    .pattern(/^[a-zA-Z0-9]+[a-zA-Z0-9\-\_\.]*[a-zA-Z0-9]+$/i)
    .min(3)
    .max(50)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  dateOfBirth: Joi.string()
    .isoDate()
    .max(thirteenYearsOld.valueOf()),
})

const handler = async (req: typeof request, res: typeof response, next: NextFunction) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({ error: error.message });
  }

  try {
    const result = await database.transaction(async (t) => {

      const user = await Users.create({}, { transaction: t });

      const userDetails = await UserDetails.create({
        userId: user.id,
        username: value.username,
        email: value.email,
        dateOfBirth: value.dateOfBirth,
      }, { transaction: t })

      return { user, userDetails };

    });

    res.status(201).json({
      id: result.user.id,
      username: result.userDetails.username,
      email: result.userDetails.email,
      dateOfBirth: result.userDetails.dateOfBirth
    })

  } catch (error) {
    console.error(error);
    res.status(500)
  }
};

export default handler;
