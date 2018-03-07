import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FrameLayout extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    return (
      <div id="layout">
        <div id="frame" />
        <div id="content">
          {this.props.children}
          <p>
            Bacon ipsum dolor amet landjaeger fatback buffalo, alcatra prosciutto shoulder beef
            venison pastrami short ribs chuck swine shankle. Bresaola cupim meatloaf picanha chuck
            spare ribs short loin. Pig t-bone sirloin meatloaf, ham capicola flank. Cow spare ribs
            shoulder bacon chuck. Kielbasa ham fatback shankle tri-tip tail. Biltong brisket beef
            ribs pork turkey, tail leberkas drumstick turducken meatloaf strip steak pastrami corned
            beef alcatra.
          </p>
          <p>
            Salami meatloaf shank short loin strip steak spare ribs shoulder venison landjaeger ham
            beef ribs brisket. Leberkas ribeye pork, porchetta buffalo sausage ham hock pancetta
            kevin short ribs rump. Pig tri-tip biltong frankfurter swine jerky venison capicola
            turkey leberkas pork. Capicola ball tip kevin landjaeger biltong pastrami jerky
            turducken corned beef meatball bresaola pork. Shank ham hock ground round pig pancetta
            turducken. Tail ball tip pancetta bresaola beef cupim ham hamburger pastrami brisket.
            Corned beef bacon landjaeger jowl chuck, pork belly swine biltong pastrami venison.
          </p>
          <p>
            T-bone boudin pork belly capicola pastrami, ham ground round tongue. Biltong capicola
            pork loin, frankfurter turkey ham hock bacon spare ribs corned beef pork chop sirloin
            brisket short ribs strip steak flank. Pork chop kielbasa pork belly biltong picanha
            doner fatback pastrami pancetta strip steak porchetta ball tip hamburger kevin leberkas.
            Buffalo salami porchetta pork loin filet mignon venison ham. Chuck pork chop flank,
            tri-tip t-bone spare ribs pig tongue.
          </p>
          <p>
            Andouille ball tip beef turkey boudin corned beef hamburger turducken ribeye meatball
            jerky kielbasa venison ham hock short ribs. Tail ham hock sirloin, burgdoggen ribeye
            meatball andouille pork chop. Burgdoggen jowl beef rump turducken doner. Pork capicola
            ham, buffalo leberkas jerky t-bone kevin pork loin andouille pork belly turducken.
            Landjaeger flank shank t-bone bacon chicken pork chop fatback spare ribs pig.
          </p>
          <p>
            Pig landjaeger ribeye meatball. Flank tail ham hock, spare ribs biltong porchetta doner
            drumstick prosciutto ribeye filet mignon. Chuck strip steak pastrami jowl, landjaeger
            pork belly fatback jerky doner rump. Ribeye pork loin salami, chicken short ribs
            drumstick andouille pig. Boudin short loin chicken tenderloin strip steak tail sausage
            pork chop prosciutto pig jowl bresaola ham. Pork swine shank beef pork loin shoulder cow
            short loin, brisket kevin tail sausage shankle. Jerky pancetta pastrami, pork loin
            burgdoggen short ribs doner cupim drumstick kielbasa.
          </p>
          <p>
            Salami meatloaf shank short loin strip steak spare ribs shoulder venison landjaeger ham
            beef ribs brisket. Leberkas ribeye pork, porchetta buffalo sausage ham hock pancetta
            kevin short ribs rump. Pig tri-tip biltong frankfurter swine jerky venison capicola
            turkey leberkas pork. Capicola ball tip kevin landjaeger biltong pastrami jerky
            turducken corned beef meatball bresaola pork. Shank ham hock ground round pig pancetta
            turducken. Tail ball tip pancetta bresaola beef cupim ham hamburger pastrami brisket.
            Corned beef bacon landjaeger jowl chuck, pork belly swine biltong pastrami venison.
          </p>
          <p>
            T-bone boudin pork belly capicola pastrami, ham ground round tongue. Biltong capicola
            pork loin, frankfurter turkey ham hock bacon spare ribs corned beef pork chop sirloin
            brisket short ribs strip steak flank. Pork chop kielbasa pork belly biltong picanha
            doner fatback pastrami pancetta strip steak porchetta ball tip hamburger kevin leberkas.
            Buffalo salami porchetta pork loin filet mignon venison ham. Chuck pork chop flank,
            tri-tip t-bone spare ribs pig tongue.
          </p>
          <p>
            Andouille ball tip beef turkey boudin corned beef hamburger turducken ribeye meatball
            jerky kielbasa venison ham hock short ribs. Tail ham hock sirloin, burgdoggen ribeye
            meatball andouille pork chop. Burgdoggen jowl beef rump turducken doner. Pork capicola
            ham, buffalo leberkas jerky t-bone kevin pork loin andouille pork belly turducken.
            Landjaeger flank shank t-bone bacon chicken pork chop fatback spare ribs pig.
          </p>
          <p>
            Pig landjaeger ribeye meatball. Flank tail ham hock, spare ribs biltong porchetta doner
            drumstick prosciutto ribeye filet mignon. Chuck strip steak pastrami jowl, landjaeger
            pork belly fatback jerky doner rump. Ribeye pork loin salami, chicken short ribs
            drumstick andouille pig. Boudin short loin chicken tenderloin strip steak tail sausage
            pork chop prosciutto pig jowl bresaola ham. Pork swine shank beef pork loin shoulder cow
            short loin, brisket kevin tail sausage shankle. Jerky pancetta pastrami, pork loin
            burgdoggen short ribs doner cupim drumstick kielbasa.
          </p>
        </div>
      </div>
    );
  }
}
