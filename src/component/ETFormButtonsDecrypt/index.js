import React from 'react';
import './index.scss';
import ui     from 'ui.json';
import {Control} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';

export default class ETFormButtonsDecrypt extends React.Component
{
  render()
  {
    return (
      <Control>
          <Button color="link" outlined rounded onClick={this.props.updater}>{ui.form.buttonDecrypt.label}</Button>
      </Control>
    );
  }
};
