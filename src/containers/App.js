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
    const container = document.getElementsByClassName("container")[0];
    const containerWidth = () => container && parseInt( window.getComputedStyle(container).width, 10);
    window.addEventListener("resize", () => this.setState({
      containerWidth: containerWidth()
    }));
    this.setState({
      containerWidth: containerWidth()
    });
  }

  handleClick(e, id) {
    const { bindIncRate, bindDecRate } = this.props;
    e.preventDefault();
    // console.log(e.type);
    switch(e.type){
      case 'click': bindIncRate(id); break;
      case 'contextmenu': bindDecRate(id); break;
      default: return;
    }
  }

  render() {
    // console.log('this.props in app = ', this.props);
    const { images: { listOfImages, loading } } = this.props;
    const { containerWidth = 0 } = this.state || {};
    console.log(this.state);
    const sortedListOfImages = listOfImages && listOfImages.sort && [...listOfImages].sort((a, b) => b.rate - a.rate);
    const sortedListWithPosition = sortedListOfImages && sortedListOfImages.map((item, index) => ({...item, left: `${33 * (index % 3)}%`, top: (containerWidth / 3) * Math.floor(index / 3) || 0 }));
    return (
      <div className="container">
        {listOfImages && listOfImages.map((image, index) =>
          <div key={image.id}
               onClick={(e) => this.handleClick(e, image.id)}
               onContextMenu={(e) => this.handleClick(e, image.id)}
               className="square bg"
               style={{left: `${33 * (index % 3)}%`, top: (containerWidth / 3) * Math.floor(index / 3) || 0, backgroundImage: `url("${image.src}")`}}>
            <div className="content">{image.rate}</div>
          </div>)}
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
