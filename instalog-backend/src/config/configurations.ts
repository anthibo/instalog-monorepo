export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
    salt: process.env.HASH_SALT,
  },
  authOptions: {
    invitationTokenExpiresIn: process.env.INVITATION_TOKEN_EXPIRES_IN,
    resetTokenExpiresIn: process.env.RESET_PASSWORD_TOKEN_EXPIRES_IN,
  },
});
