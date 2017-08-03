import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchImages, incRate, decRate } from '../actions'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    images: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchImages());
  }

  handleClick(e) {
    console.log(e.type);
    switch(e.type){
      case 'click': break;
      case 'contextmenu': break;
      default: break;
    }
  }


  render() {
    console.log('this.props in app = ', this.props);
    const { images: { listOfImages, loading } } = this.props;
    return (
      <div>
        {listOfImages && listOfImages.map((image, index) => <div key={image.id} onClick={this.handleClick} onContextMenu={this.handleClick} className="square bg" style={{backgroundImage: `url("${image.src}")`}}><div className="content">{image.rate}</div></div>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps)(App)
