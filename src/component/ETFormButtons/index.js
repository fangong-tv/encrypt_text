import React from 'react';
import './index.scss';
import {Field} from 'react-bulma-components/lib/components/form';
import ETFormButtonsEncrypt from 'component/ETFormButtonsEncrypt';
import ETFormButtonsDecrypt from 'component/ETFormButtonsDecrypt';

export default class ETFormButtons extends React.Component
{
  render()
  {
    return (
      <Field kind="group" align="centered" className="etformbuttons">
        <ETFormButtonsEncrypt updater={this.props.encryptUpdater} />
        <ETFormButtonsDecrypt updater={this.props.decryptUpdater} />
      </Field>
    );
  }
};
