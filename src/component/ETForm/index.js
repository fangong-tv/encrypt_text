import React from 'react';
import './index.scss';
import config from 'config.json';
import Encryption from 'lib/Encryption';
import Decryption from 'lib/Decryption';
import ETFormText from 'component/ETFormText';
import ETFormPW   from 'component/ETFormPW';
import ETFormButtons from 'component/ETFormButtons';

export default class ETForm extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      textValue        : '',
      textValid        : null,
      pwValue          : '',
      pwValid          : null,
      submittedEncrypt : false,
      submittedDecrypt : false,
      formReady        : false,
      wrongPW          : false
    };

    this.updateText    = this.updateText.bind(this);
    this.updatePW      = this.updatePW.bind(this);
    this.submitEncrypt = this.submitEncrypt.bind(this);
    this.submitDecrypt = this.submitDecrypt.bind(this);
  }

  render()
  {
    return (
      <form className="etform has-background-grey-darker has-text-white">
        <ETFormText value={this.state.textValue} valid={this.state.textValid} valueUpdater={this.updateText} />
        <ETFormPW value={this.state.pwValue} valid={this.state.pwValid} valueUpdater={this.updatePW} />
        <ETFormButtons encryptUpdater={this.submitEncrypt} decryptUpdater={this.submitDecrypt} />
      </form>
    );
  }

  validateText()
  {
    if (this.state.textValue === '')
    {
      return null;
    }

    if (typeof this.state.textValue !== 'string' ||
        (this.state.textValue.length < config.text.minLength ||
         this.state.textValue.length > config.text.maxLength))
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  validatePW()
  {
    if (this.state.wrongPW === true)
    {
      return false;
    }

    if (this.state.pwValue === '')
    {
      return null;
    }

    if (typeof this.state.pwValue !== 'string' ||
        (this.state.pwValue.length < config.password.minLength ||
         this.state.pwValue.length > config.password.maxLength))
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  updateText(text)
  {
    this.setState({
      textValue        : text.target.value,
      submittedEncrypt : false,
      submittedDecrypt : false,
      formReady        : false,
      wrongPW          : false
    });
  }

  updatePW(pw)
  {
    this.setState({
      pwValue          : pw.target.value,
      submittedEncrypt : false,
      submittedDecrypt : false,
      formReady        : false,
      wrongPW          : false
    });
  }

  encrypt()
  {
    let enc = new Encryption(this.state.textValue, this.state.pwValue);
    return enc.encrypt();
  }

  decrypt()
  {
    try
    {
      let dec = new Decryption(this.state.textValue, this.state.pwValue);
      return dec.decrypt();
    }
    catch (e)
    {
      throw e;
    }
  }

  submitEncrypt(e)
  {
    this.setState({
      submittedEncrypt : true,
      submittedDecrypt : false,
      formReady        : false,
      wrongPW          : false
    });

    e.preventDefault();
  }

  submitDecrypt(e)
  {
    this.setState({
      submittedEncrypt : false,
      submittedDecrypt : true,
      formReady        : false,
      wrongPW          : false
    });

    e.preventDefault();
  }

  componentDidUpdate(prevProps, prevState)
  {
    // Validate Text
    if (prevState.textValue !== this.state.textValue)
    {
      this.setState({ textValid: this.validateText() });
    }

    // Validate Password
    if (prevState.pwValue   !== this.state.pwValue   ||
        prevState.textValue !== this.state.textValue ||
        prevState.wrongPW   !== this.state.wrongPW)
    {
      this.setState({ pwValid: this.validatePW() });
    }

    // Click Encrypt
    if (prevState.submittedEncrypt === false &&
        this.state.submittedEncrypt === true)
    {
      if (this.validateText() === true && this.validatePW() === true)
      {
        this.setState({
          submittedEncrypt : true,
          submittedDecrypt : false,
          formReady        : true,
          wrongPW          : false
        });
      }
      else
      {
        this.setState({
          submittedEncrypt : false,
          submittedDecrypt : false,
          formReady        : false,
          wrongPW          : false
        });
      }
    }

    // Click Decrypt
    if (prevState.submittedDecrypt === false &&
        this.state.submittedDecrypt === true)
    {
      if (this.validateText() === true && this.validatePW() === true)
      {
        this.setState({
          submittedEncrypt : false,
          submittedDecrypt : true,
          formReady        : true,
          wrongPW          : false
        });
      }
      else
      {
        this.setState({
          submittedEncrypt : false,
          submittedDecrypt : false,
          formReady        : false
        });
      }
    }

    // Encrypt
    if (prevState.formReady === false &&
        this.state.formReady === true &&
        this.state.submittedEncrypt === true)
    {
      this.setState({
        textValue        : this.encrypt(),
        submittedEncrypt : false,
        submittedDecrypt : false,
        formReady        : false,
        wrongPW          : false
      });
    }

    // Decrypt
    if (prevState.formReady === false &&
        this.state.formReady === true &&
        this.state.submittedDecrypt === true)
    {
      try
      {
        this.setState({
          textValue        : this.decrypt(),
          submittedEncrypt : false,
          submittedDecrypt : false,
          formReady        : false,
          wrongPW          : false
        });
      }
      catch (e)
      {
        this.setState({
          submittedEncrypt : false,
          submittedDecrypt : false,
          formReady        : false,
          wrongPW          : true
        });
      }
    }
  }

};
