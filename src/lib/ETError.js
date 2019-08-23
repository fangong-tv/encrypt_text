/**
 * ETError: the Error class for this project.
 * {
 *  message   {string}
 *  code      {string}
 *  previous  {Error|null}
 * }
 *
 * Code         Message
 * 1            Encryption: invalid text
 * 2            Encryption: invalid password
 * 3            Decryption: invalid text
 * 4            Decryption: invalid password
 */

const ptnMessage  = /^.+$/u;
const ptnCode     = /^\d+$/;

class ETError extends Error
{

  /**
   * @param {string}     message          Message for human
   * @param {string}     code             Error code for machine
   * @param {Error|null} [previous=null]  Previous Error
   * @exception {Error}  'invalid message' / 'invalid code' / 'invalid previous'
   */
  constructor(message, code, previous=null)
  {
    if (typeof message !== 'string' || ptnMessage.test(message) === false)
    {
      throw new Error('invalid message');
    }

    if ((typeof code !== 'string' && typeof code !== 'number') ||
         ptnCode.test(code) === false)
    {
      throw new Error('invalid code');
    }

    if (previous !== null && previous instanceof Error === false)
    {
      throw new Error('invalid previous');
    }

    message = String(message);
    code    = String(code);

    // V8
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ETError);
    }

    // Assignment
    super(message);
    this.code      = code;
    this.previous  = previous;
  }

  toString()
  {
    if (this.previous === null)
    {
      return (`${this.constructor.name}: ${this.message} / ${this.code}`);
    }
    else
    {
      return (`${this.constructor.name}: ${this.message} / ${this.code}` + '\n' +
              this.previous);
    }
  }

}

export default ETError;
