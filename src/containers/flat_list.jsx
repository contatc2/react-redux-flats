import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from './flat';


class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      this.props.flats.map(flat => <Flat flat={flat} key={flat.lat} />)
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
