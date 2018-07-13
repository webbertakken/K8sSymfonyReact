import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Input, Label, Row } from 'reactstrap';

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Spicy jalapeno bacon ipsum dolor amet chuck bacon salami, prosciutto tail tongue
                burgdoggen meatloaf frankfurter kevin venison doner leberkas. Flank venison cupim,
                picanha brisket biltong shankle doner short ribs pork belly cow. Ham bresaola ham
                hock, shankle prosciutto biltong pancetta leberkas tri-tip. Pork loin shankle
                capicola bresaola.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardBody>
                Sausage alcatra ball tip kielbasa cupim spare ribs ribeye buffalo pork chop. Chicken
                kevin tenderloin kielbasa filet mignon, meatloaf pastrami drumstick venison shankle
                corned beef strip steak meatball.
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                <i className="fa fa-check float-right"></i>Card with icon
              </CardHeader>
              <CardBody>
                Boudin cupim sirloin turducken corned beef strip steak flank. Pork belly fatback
                venison, doner pork chicken drumstick boudin picanha ham. Beef ribs swine turkey
                pork belly, capicola turducken boudin tail. Tongue landjaeger kevin brisket bresaola
                tenderloin beef. Shankle chicken frankfurter hamburger chuck, tail capicola beef
                ribs buffalo beef turkey pig boudin venison ham.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Card with switch
                <Label className="switch switch-sm switch-text switch-info float-right mb-0">
                  <Input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardHeader>
              <CardBody>
                Pork loin pork belly shankle jowl kielbasa short loin andouille pancetta hamburger
                pastrami ground round meatball porchetta. Meatball jowl ball tip picanha. Chuck
                sausage andouille pork chop drumstick. Chuck leberkas shank, venison filet mignon
                cow beef ribs. Frankfurter cupim rump pork belly, meatball tongue tenderloin doner
                filet mignon. Ham hock ham fatback pork chop ground round salami.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Card with label
                <Badge color="success" className="float-right">Success</Badge>
              </CardHeader>
              <CardBody>
                Biltong buffalo t-bone short ribs jerky ham hock filet mignon tongue. Beef ribs
                shankle pancetta tri-tip chuck landjaeger filet mignon t-bone buffalo turducken
                short loin. Bacon picanha jowl shankle bresaola ball tip beef ribs andouille
                porchetta pork venison filet mignon leberkas doner. Frankfurter sirloin prosciutto,
                pastrami capicola pork chop jerky t-bone filet mignon ground round meatloaf corned
                beef shank andouille swine. Strip steak corned beef porchetta tri-tip chicken
                sausage buffalo, meatloaf andouille brisket.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Card with label
                <Badge pill color="danger" className="float-right">42</Badge>
              </CardHeader>
              <CardBody>
                Ribeye venison pork loin pancetta beef ribs, short loin pig andouille biltong jowl
                bresaola frankfurter. Flank prosciutto landjaeger swine buffalo, cupim pig. Cow jowl
                frankfurter filet mignon andouille spare ribs tail buffalo venison sirloin. Flank
                leberkas capicola pancetta bacon jowl chuck beef spare ribs ground round landjaeger.
                Ball tip ham hock beef ribs pork chop drumstick pork short ribs pancetta jerky bacon
                pork belly bresaola fatback. Frankfurter venison buffalo kevin.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="border-primary">
              <CardHeader>
                Card outline primary
              </CardHeader>
              <CardBody>
                Pork belly bacon rump beef ribs ribeye, doner turkey. Kevin tail ribeye buffalo
                shank, drumstick ham pastrami. Frankfurter bacon venison hamburger rump bresaola
                chicken tongue. Porchetta andouille pastrami turkey chuck ball tip.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-secondary">
              <CardHeader>
                Card outline secondary
              </CardHeader>
              <CardBody>
                Cow shankle pork capicola sausage pork loin pork chop tongue brisket beef ribs.
                Swine prosciutto pork belly doner, shankle picanha landjaeger shoulder tail meatball
                ham hock venison fatback. Andouille short ribs corned beef venison pork loin
                drumstick, shankle flank strip steak capicola porchetta. Venison jerky andouille
                biltong sirloin ground round. Brisket capicola filet mignon tenderloin buffalo
                tri-tip.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-success">
              <CardHeader>
                Card outline success
              </CardHeader>
              <CardBody>
                Flank buffalo pastrami, shoulder meatball t-bone bresaola tongue burgdoggen
                porchetta. Tail chicken biltong andouille, shankle turducken sausage. Turducken
                chicken pork chop, ground round hamburger short ribs ball tip pastrami. Andouille
                flank pork, fatback short loin meatball turkey frankfurter leberkas turducken short
                ribs strip steak prosciutto shank corned beef. Ground round ham hock meatball
                picanha pork belly pork loin buffalo frankfurter ribeye beef ribs chuck jowl
                kielbasa burgdoggen. Beef picanha cow brisket meatloaf prosciutto short loin ball
                tip venison jowl shankle beef ribs.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-info">
              <CardHeader>
                Card outline info
              </CardHeader>
              <CardBody>
                Meatloaf hamburger jerky, rump boudin drumstick pork loin ham hock buffalo
                frankfurter tail fatback chuck brisket. Cupim pork spare ribs, pastrami shank
                fatback capicola alcatra tri-tip picanha. Hamburger turducken shank ball tip,
                frankfurter shoulder sausage capicola flank cow pastrami pancetta pork chop ham hock
                porchetta. Frankfurter turkey filet mignon ribeye picanha jerky t-bone salami doner.
                Shoulder bacon ground round shankle, short ribs fatback pork loin buffalo pork chop
                burgdoggen tri-tip ham hock sausage shank.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-warning">
              <CardHeader>
                Card outline warning
              </CardHeader>
              <CardBody>
                Cupim boudin rump ball tip, strip steak picanha doner corned beef turducken pork
                loin beef t-bone. Jerky filet mignon ham shankle pork loin cow prosciutto shoulder
                salami. Porchetta buffalo kielbasa, shankle prosciutto capicola bacon jowl picanha
                ham hock landjaeger salami pork. Cupim sausage biltong hamburger short loin bacon
                tenderloin t-bone. Prosciutto brisket tongue pig pastrami ham hock.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-danger">
              <CardHeader>
                Card outline danger
              </CardHeader>
              <CardBody>
                Doner cupim bresaola, buffalo tongue pastrami ground round meatloaf chicken swine
                meatball brisket jowl. Venison burgdoggen t-bone jowl cupim doner salami meatloaf
                andouille swine sirloin sausage pig shoulder jerky. Ham sirloin drumstick biltong
                frankfurter. Beef ribs salami pork belly alcatra shankle frankfurter, chicken cupim
                kevin. Meatloaf filet mignon corned beef chuck flank tenderloin bacon cow pork
                pancetta strip steak frankfurter. Biltong andouille tongue meatball turkey turducken
                alcatra jerky bacon boudin ground round.
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-primary">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Shankle pig buffalo pork loin, pork chop pancetta kielbasa sirloin pastrami cupim
                tri-tip tenderloin. Cupim pork chop short loin ham hock, pancetta turkey shankle.
                Spare ribs beef ribs venison, biltong tail tenderloin shank pig cupim filet mignon
                picanha. Fatback pork loin.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-secondary">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                landjaeger sausage beef short loin pork venison turducken leberkas cow filet mignon
                doner sirloin cupim. Buffalo tri-tip pastrami, tongue biltong porchetta short loin
                shankle meatball ham hock. Shank chuck ribeye boudin. Chicken ribeye t-bone, bacon
                strip steak kielbasa salami prosciutto.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-success">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Capicola frankfurter spare ribs kevin leberkas strip steak. Sirloin t-bone jerky
                andouille ground round bacon swine fatback, tenderloin cupim prosciutto meatball.
                Pork loin pig chuck tri-tip, t-bone biltong hamburger leberkas ball tip meatloaf ham
                picanha strip steak ground round bresaola. Tongue ball tip kevin porchetta, short
                ribs pork ham.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-info">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Kielbasa pancetta sirloin, bresaola doner porchetta burgdoggen pork kevin. Spare
                ribs shoulder porchetta andouille kevin turkey, ribeye bresaola. Pancetta capicola
                turducken prosciutto frankfurter t-bone pork belly shankle chuck fatback corned beef
                flank sausage. Andouille salami meatball ball tip swine shankle ham hock pork loin
                landjaeger cupim strip steak biltong tail shoulder.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-warning">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Frankfurter swine prosciutto pork loin porchetta. Ground round venison pig,
                porchetta kielbasa corned beef pork loin pork pork belly short ribs tongue
                prosciutto. Bacon swine shoulder fatback meatloaf.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-danger">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Porchetta swine filet mignon spare ribs jowl burgdoggen sirloin meatloaf. Beef strip
                steak short loin hamburger tenderloin frankfurter pork loin shank sausage drumstick
                andouille ball tip. Tail tongue burgdoggen tri-tip, prosciutto alcatra boudin shank
                salami cupim. Jowl turkey andouille, ball tip swine picanha filet mignon alcatra
                meatball fatback.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-primary text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>
                    Rump pork chop picanha fatback, prosciutto pork loin tri-tip landjaeger flank
                    pancetta filet mignon pastrami.
                  </p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Rump pork chop picanha fatback, prosciutto pork loin tri-tip landjaeger flank
                    pancetta filet mignon pastrami.
                  </p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-info text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Rump pork chop picanha fatback, prosciutto pork loin tri-tip landjaeger flank
                    pancetta filet mignon pastrami.
                  </p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Rump pork chop picanha fatback, prosciutto pork loin tri-tip landjaeger flank
                    pancetta filet mignon pastrami.
                  </p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-danger text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Rump pork chop picanha fatback, prosciutto pork loin tri-tip landjaeger flank
                    pancetta filet mignon pastrami.
                  </p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-primary text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Rump pork chop picanha fatback, prosciutto pork loin tri-tip landjaeger flank
                    pancetta filet mignon pastrami.
                  </p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-primary">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Spare ribs turkey flank, ball tip short loin buffalo jerky porchetta. Turducken
                biltong short loin, flank short ribs kielbasa ground round bresaola prosciutto
                meatloaf t-bone picanha leberkas. Burgdoggen pig flank, corned beef meatloaf ham
                biltong ham hock cupim ground round bresaola t-bone tri-tip brisket sausage. Biltong
                short ribs leberkas tenderloin salami sausage ham shoulder brisket landjaeger
                hamburger rump cupim. Jerky biltong short loin capicola shankle. Prosciutto cow
                flank,
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Brisket pork chop turducken frankfurter short loin t-bone. Filet mignon cow
                burgdoggen, prosciutto picanha meatball bresaola kevin pancetta. Kevin picanha cow
                fatback, short loin turducken burgdoggen buffalo sausage t-bone tongue biltong.
                Pancetta meatball pork chop beef ribs cupim strip steak cow frankfurter rump tri-tip
                swine ham hock pig.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-info">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Picanha andouille prosciutto shankle chuck pork belly alcatra turducken brisket,
                beef meatloaf ham hock doner. Shank fatback turducken jowl ball tip filet mignon
                burgdoggen salami pig buffalo kielbasa alcatra pork belly cupim hamburger. Tri-tip
                fatback rump pancetta pastrami, prosciutto hamburger capicola meatloaf tail alcatra
                brisket sirloin shankle.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Jerky swine ribeye, pork chop landjaeger spare ribs biltong tail meatball short loin
                chuck beef pig ham hock. Burgdoggen ribeye tenderloin cupim jerky pancetta. Alcatra
                bresaola corned beef, hamburger pastrami brisket turducken capicola sirloin
                burgdoggen strip steak picanha frankfurter buffalo. Porchetta rump filet mignon.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-danger">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                swine andouille cupim brisket pancetta. Fatback drumstick ham hock swine, flank pork
                loin short loin pork shankle ribeye corned beef. Tail cow turkey rump shankle
                pastrami prosciutto tenderloin fatback ground round pig pork belly cupim. T-bone
                filet mignon beef tongue ball tip chicken picanha.
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
