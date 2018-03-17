import React from 'react';

import './Main.scss';

const Main = props => ({
  render() {
    return (
      <div className="ui container grid centered">
        <div className="seven wide column">
          <div className="ui piled very padded text segment">
            {props.children}
          </div>
        </div>
      </div>
    );
  }
});

export default Main;