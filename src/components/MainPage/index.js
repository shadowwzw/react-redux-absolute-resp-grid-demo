import React from 'react';
import PropTypes from 'prop-types';
import ImageList from '../../containers/ImageList';
import Header from '../Header';

const MainPage = ({config})=> (<div>
  <Header/>
  <ImageList config={config} />
</div>);

MainPage.PropTypes = {
  config: PropTypes.object.isRequired,
};

export default MainPage;