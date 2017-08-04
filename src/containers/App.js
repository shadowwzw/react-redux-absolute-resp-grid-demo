import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchImages, incRate, decRate } from '../actions'
import Square from '../components/Square';
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
    const updateWidthInState = () => this.setState({
      containerWidth: containerWidth()
    });
    window.addEventListener("resize", () => updateWidthInState());
    updateWidthInState();
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
    // console.log(this.state);
    const sortedListOfImages = listOfImages && listOfImages.sort && [...listOfImages].sort((a, b) => b.rate - a.rate);
    const sortedListWithPosition = sortedListOfImages && sortedListOfImages.map((item, index) => ({...item, left: `${33 * (index % 3)}%`, top: (containerWidth / 3) * Math.floor(index / 3) || 0 }));
    return (
      <div className="container">
        {listOfImages && listOfImages.map((image, index) =>
          <Square key={image.id}
                  image={image}
                  sortedListWithPosition={sortedListWithPosition}
                  handleClick={this.handleClick}
          /> ) }
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
