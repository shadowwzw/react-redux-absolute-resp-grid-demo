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
    bindIncRate: PropTypes.func.isRequired,
    bindDecRate: PropTypes.func.isRequired,
    bindFetchImages: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { bindFetchImages } = this.props;
    bindFetchImages();
  }

  handleClick(e, id) {
    const { bindIncRate, bindDecRate } = this.props;
    e.preventDefault();
    console.log(e.type);
    switch(e.type){
      case 'click': bindIncRate(id); break;
      case 'contextmenu': bindDecRate(id); break;
      default: return;
    }
  }


  render() {
    console.log('this.props in app = ', this.props);
    const { images: { listOfImages, loading } } = this.props;
    const sortedListOfImages = listOfImages && listOfImages.sort && listOfImages.sort((a, b) => b.rate - a.rate);
    return (
      <div>
        {sortedListOfImages && sortedListOfImages.map((image, index) => <div key={image.id} onClick={(e) => this.handleClick(e, image.id)} onContextMenu={(e) => this.handleClick(e, image.id)} className="square bg" style={{backgroundImage: `url("${image.src}")`}}><div className="content">{image.rate}</div></div>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: state.images,
});

const mapDispatchToProps = dispatch => ({
  bindIncRate: id => dispatch(incRate(id)),
  bindDecRate: id => dispatch(decRate(id)),
  bindFetchImages: id => dispatch(fetchImages(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
