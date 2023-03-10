import * as Joi from 'joi';

export const configurationsSchemaValidation = Joi.object({
  server: {
    port: Joi.string().required(),
  },
  mongo: {
    uri: Joi.string().required(),
  },
  authOptions: {
    invitationTokenExpiresIn: Joi.number().required(),
    resetTokenExpiresIn: Joi.number().required(),
  },
});
