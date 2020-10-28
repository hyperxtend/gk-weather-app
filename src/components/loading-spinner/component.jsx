import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

import {
  StyledLoaderContainer,
  StyledSpinnerContainer,
} from '../styled-components';

const LoadingSpinner = ({ loadingMessage }) => {
  return (
    <StyledLoaderContainer>
      <h2>{loadingMessage}</h2>
      <StyledSpinnerContainer>
        <Spinner animation="border" variant="light" />
      </StyledSpinnerContainer>
    </StyledLoaderContainer>
  );
};

LoadingSpinner.propTypes = {
  loadingMessage: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  loadingMessage: 'Loading',
};

export default LoadingSpinner;
