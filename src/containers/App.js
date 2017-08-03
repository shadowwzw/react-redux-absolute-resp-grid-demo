import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchImages } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import './App.css';

class App extends Component {
  static propTypes = {
    // selectedReddit: PropTypes.string.isRequired,
    // posts: PropTypes.array.isRequired,
    // isFetching: PropTypes.bool.isRequired,
    // lastUpdated: PropTypes.number,
    // dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchImages());
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.selectedReddit !== this.props.selectedReddit) {
    //   const { dispatch, selectedReddit } = nextProps
    //   dispatch(fetchPostsIfNeeded(selectedReddit))
    // }
  }

  // handleChange = nextReddit => {
  //   this.props.dispatch(selectReddit(nextReddit))
  // }

  // handleRefreshClick = e => {
  //   e.preventDefault()
  //
  //   const { dispatch, selectedReddit } = this.props
  //   dispatch(invalidateReddit(selectedReddit))
  //   dispatch(fetchPostsIfNeeded(selectedReddit))
  // }

  render() {
    console.log('this.props in app = ', this.props);
    const { images: { listOfImages, loading } } = this.props;
    return (
      <div>
        {listOfImages && listOfImages.map((image, index) => <div key={image.id} className="square bg" style={{backgroundImage: `url("${image.src}")`}}><div className="content">{10}</div></div>)}
      </div>
    )
    // const { selectedReddit, posts, isFetching, lastUpdated } = this.props
    // const isEmpty = posts.length === 0
    // return (
    //   <div>
    //     <Picker value={selectedReddit}
    //             onChange={this.handleChange}
    //             options={[ 'reactjs', 'frontend' ]} />
    //     <p>
    //       {lastUpdated &&
    //         <span>
    //           Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
    //           {' '}
    //         </span>
    //       }
    //       {!isFetching &&
    //         <button onClick={this.handleRefreshClick}>
    //           Refresh
    //         </button>
    //       }
    //     </p>
    //     {isEmpty
    //       ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
    //       : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
    //           <Posts posts={posts} />
    //         </div>
    //     }
    //   </div>
    // )
  }
}

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps)(App)
