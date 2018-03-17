import React from 'react';

import './Main.scss';

const Main = props => ({
  render() {
    return (
      <div className="ui stackable container grid centered">
        <div className="ten wide tablet seven wide computer column">
          <div className="ui piled very padded text segment">
            {props.children}
          </div>
        </div>
      </div>
    );
  }
});

export default Main;