import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchImages } from '../actions'
import './App.css';

class App extends Component {
  static propTypes = {
    images: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchImages());
  }

  render() {
    console.log('this.props in app = ', this.props);
    const { images: { listOfImages, loading } } = this.props;
    return (
      <div>
        {listOfImages && listOfImages.map((image, index) => <div key={image.id} className="square bg" style={{backgroundImage: `url("${image.src}")`}}><div className="content">{image.rate}</div></div>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps)(App)
