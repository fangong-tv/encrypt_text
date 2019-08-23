/**
 * Data for Encryption
 * {
 *   text:     {plain text}
 *   password: {plain password}
 * }
 */

import SimpleCrypto from "simple-crypto-js";
import config from 'config.json';
import ETError from 'lib/ETError';

class Encryption
{
  /**
   * @param {string} text
   * @param {string} password
   * @exception {ETError}  1 / 2
   */
  constructor(text, password)
  {
    if (typeof text !== 'string' ||
       (text.length < config.text.minLength || text.length > config.text.maxLength))
    {
      throw new ETError('Encryption: invalid text', 1);
    }

    if (typeof password !== 'string' ||
       (password.length < config.password.minLength || password.length > config.password.maxLength))
    {
      throw new ETError('Encryption: invalid password', 2);
    }

    this.text     = text;
    this.password = password;
  }

  /**
   * @return {string} Encrypted text
   */
  encrypt()
  {
    let sc = new SimpleCrypto(this.password);
    let encrypted = sc.encrypt(this.text);
    return encrypted;
  }
}

export default Encryption;
