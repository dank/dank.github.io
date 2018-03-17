import React, {Component} from 'react';
import cx from 'classnames';

import './Social.scss';

class Social extends Component {
  render() {
    const {color, icon, href} = this.props;

    return (
      <a href={href}>
        <div className="Social" style={{backgroundColor: color}}>
          <i className={cx('icon', icon)} />
        </div>
      </a>
    );
  }
}

export default Social;