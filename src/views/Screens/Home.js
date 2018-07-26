import React, {Component} from 'react';

import Me from '../Components/Me';
import Social from '../Components/Social';

import headshot from '../../assets/img/headshot2.jpg';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <Me photo={headshot} className="face" />

        <div className="text-center">
          <h2 className="my-0 mx-0 mb-1">Dan Kyung</h2>
          <h4 className="text-muted my-0 mx-0 mb-2">Software Developer</h4>
          <div className="ui grid centered">
            <div className="stackable five column row">
              <div className="two wide column center aligned">
                <Social color="#007BB5" icon="linkedin in" href="https://www.linkedin.com/in/dannk" />
              </div>
              <div className="two wide column center aligned">
                <Social color="#24292E" icon="github" href="https://github.com/dank" />
              </div>
              <div className="two wide column center aligned">
                <Social color="#C32AA3" icon="instagram" href="https://www.instagram.com/dan.kyung/" />
              </div>
              <div className="two wide column center aligned">
                <Social color="#1DA1F2" icon="twitter" href="https://twitter.com/realDanKyung" />
              </div>
              <div className="two wide column center aligned">
                <Social color="#AAAAAA" icon="envelope" href="mailto:dan@kyung.ca" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
