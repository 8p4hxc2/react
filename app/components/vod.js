import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Vod extends Component {
  render() {
    return (
      <div>
        <h1 className='zzzz'>WHUT?VOODDDD{this.props.random}</h1>
        <Link to={'/'}>hehe</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {random: state.random};
}

export default connect(mapStateToProps)(Vod);
