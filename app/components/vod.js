import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import "styles/vod";

class Vod extends Component {
  render() {
    return (
      <div>
        <h1 className='zzzz'>WHUT?VOODDDD{this.props.random}</h1>
        <Link to={'/'}>Home</Link>
        <div className='menu'>
          {this.props.rail.map((x, i) => <div className={i === 0
            ? 'omg'
            : 'haha'} key={i}>{this.props.rail[i]}</div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {rail: state.rail};
}

export default connect(mapStateToProps)(Vod);
