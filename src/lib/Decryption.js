/**
 * Data for Decryption
 * {
 *   text:     {encrypted text}
 *   password: {plain password}
 * }
 */

import SimpleCrypto from "simple-crypto-js";
import config from 'config.json';
import ETError from 'lib/ETError';

class Decryption
{
  /**
   * @param {string} text
   * @param {string} password
   * @exception {ETError}  3 / 4
   */
  constructor(text, password)
  {
    if (typeof text !== 'string' ||
       (text.length < config.text.minLength || text.length > config.text.maxLength))
    {
      throw new ETError('Decryption: invalid text', 3);
    }

    if (typeof password !== 'string' ||
       (password.length < config.password.minLength || password.length > config.password.maxLength))
    {
      throw new ETError('Decryption: invalid password', 4);
    }

    this.text     = text;
    this.password = password;
  }

  /**
   * @return {string} Decrypted text
   * @exception {ETError} 4
   */
  decrypt()
  {
    let sc = new SimpleCrypto(this.password);
    let decrypted = sc.decrypt(this.text);
    if (decrypted === '')
    {
      throw new ETError('Decryption: invalid password', 4);
    }
    else
    {
      return decrypted;
    }
  }
}

export default Decryption;
