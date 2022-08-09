class InvalidCredentialsException extends Error {
  constructor(message) {
    super(message);

    this.code = 'ERR_INVALID_CREDENTIALS';
    this.name = 'InvalidCredentials';
  }
}

export default InvalidCredentialsException;
