import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import * as actions from 'actions';
import { Link } from 'react-router-dom'

class Home extends Component {
  /*  constructor(props, context) {
    super(props, context);

    this.state = {
      random: Math.random()
    };
  };*/

  click(e) {
    this.props.actions.randomNumber();
    //this.setState({random: Math.random()});
  }

  render() {
    return (
      <div>
        <h1 className='oo' onClick={(e) => this.click(e)}>{this.props.random}</h1>
        <Link to={'/vod'}>haha</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {random: state.random};
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
