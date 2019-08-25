import React from 'react';
import './index.scss';
import config from 'config.json';
import ui     from 'ui.json';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import ETForm from 'component/ETForm';

export default class ETMain extends React.Component
{
  render()
  {
    return (
      <Hero renderAs="main" size="fullheight" color="black">
        <Hero.Head renderAs="header" className="etmain_header has-background-grey-darker has-text-centered">
          <Heading size="4" weight="normal">{ui.appName}</Heading>
        </Hero.Head>
        <ETForm />
        <Hero.Footer renderAs="footer" className="etmain_footer has-background-grey-darker has-text-centered">
          <p>{ui.donation}: {config.donation.bitcoin}</p>
        </Hero.Footer>
      </Hero>
    );
  }

};
