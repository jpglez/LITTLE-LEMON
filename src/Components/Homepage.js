import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
function Homepage() {
  return (
    <div>
      <Chicago />
      <CallToAction />
      <Specials />
      <CustomersSay />
    </div>
  );
}

export default Homepage;
