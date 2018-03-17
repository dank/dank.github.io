import React, {Component} from 'react';
import cx from 'classnames';

import './Me.scss';

class Me extends Component {
  render() {
    const {photo, style, className} = this.props;

    return (
      <img className={cx('Me', className)} src={photo} style={style} />
    );
  }
}

export default Me;