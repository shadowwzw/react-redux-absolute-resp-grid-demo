import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchImages, incRate, decRate, setContainerWidth } from '../actions'
import Square from '../components/Square';
import Loader from '../components/Loader';
import Error from '../components/Error';
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
    bindSetContainerWidth: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { bindFetchImages, bindSetContainerWidth } = this.props;
    bindFetchImages();
    const container = ReactDOM.findDOMNode(this.refs.container);
    const containerWidth = () => container && parseInt( window.getComputedStyle(container).width, 10);
    window.addEventListener("resize", () => bindSetContainerWidth(containerWidth()));
    bindSetContainerWidth(containerWidth());
  }

  handleClick(e, id) {
    const { bindIncRate, bindDecRate } = this.props;
    e.preventDefault();
    switch(e.type){
      case 'click': bindIncRate(id); break;
      case 'contextmenu': bindDecRate(id); break;
      default: return;
    }
  }

  render() {
    const { images: { listOfImages, sortedListWithPosition, loading, error } } = this.props;
    return (
      <div>
        <Loader enabled={loading && !error}/>
        {error && <Error message={error}/>}
        <div className="container" ref="container">
          {listOfImages && listOfImages.map((image, index) =>
            <Square key={image.id}
                    image={image}
                    sortedListWithPosition={sortedListWithPosition || listOfImages}
                    handleClick={this.handleClick}
            /> ) }
        </div>
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
  bindSetContainerWidth: containerWidth => dispatch(setContainerWidth(containerWidth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
