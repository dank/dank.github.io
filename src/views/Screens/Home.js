import React, { Component } from 'react';

import Me from '../Components/Me';
import Social from '../Components/Social';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <Me photo={"https://avatars2.githubusercontent.com/u/1585101?s=460&v=4"} className="face" />

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
