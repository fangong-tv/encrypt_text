import React from 'react';
import './index.scss';
import config from 'config.json';
import ui     from 'ui.json';
import {
  Field,
  Control,
  Label,
  Input,
  Help,
} from 'react-bulma-components/lib/components/form';
import Icon from 'react-bulma-components/lib/components/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey, faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faKey, faCheck);

export default class ETFormPW extends React.Component
{
  render()
  {
    let html = {
      normal: (
        <Field>
          <Label className="has-text-white">{ui.form.password.label}</Label>
          <Control iconLeft iconRight fullwidth>
            <Input type="password" className="etformpw_input has-background-grey-dark has-text-white"
              value={this.props.value} onInput={this.props.valueUpdater}
              maxLength={config.password.maxLength} minLength={config.password.minLength} required />
            <Icon align="left">
              <FontAwesomeIcon icon="key" color="white" />
            </Icon>
            <Icon align="right" className="et_hidden">
              <FontAwesomeIcon icon="check" color="lime" />
            </Icon>
          </Control>
          <Help color="danger" className="et_hidden has-text-right">{ui.form.password.help}</Help>
        </Field>
      ),
      valid: (
        <Field>
          <Label className="has-text-white">{ui.form.password.label}</Label>
          <Control iconLeft iconRight fullwidth>
            <Input type="password" className="et_form_valid etformpw_input has-background-grey-dark has-text-white"
              value={this.props.value} onInput={this.props.valueUpdater}
              maxLength={config.password.maxLength} minLength={config.password.minLength} required />
            <Icon align="left">
              <FontAwesomeIcon icon="key" color="white" />
            </Icon>
            <Icon align="right">
              <FontAwesomeIcon icon="check" color="lime" />
            </Icon>
          </Control>
          <Help color="danger" className="et_hidden has-text-right">{ui.form.password.help}</Help>
        </Field>
      ),
      invalid: (
        <Field>
          <Label className="has-text-white">{ui.form.password.label}</Label>
          <Control iconLeft iconRight fullwidth>
            <Input type="password" className="et_form_invalid etformpw_input has-background-grey-dark has-text-white"
              value={this.props.value} onInput={this.props.valueUpdater}
              maxLength={config.password.maxLength} minLength={config.password.minLength} required />
            <Icon align="left">
              <FontAwesomeIcon icon="key" color="white" />
            </Icon>
            <Icon align="right" className="et_hidden">
              <FontAwesomeIcon icon="check" color="lime" />
            </Icon>
          </Control>
          <Help color="danger" className="has-text-right">{ui.form.password.help}</Help>
        </Field>
      )
    };

    switch (this.props.valid) {
      case true:
        html = html.valid;
        break;
      case false:
        html = html.invalid;
        break;
      default:
        html = html.normal;
    }

    return html;
  }
};
