import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSpinnerContainer = styled.div`
  margin-top: 2rem;
  transform: scale(1.5);
`;

const LoadingSpinner = ({ loadingMessage }) => {
  return (
    <>
      <h2>{loadingMessage}</h2>
      <StyledSpinnerContainer>
        <Spinner animation="border" variant="light" />
      </StyledSpinnerContainer>
    </>
  );
};

LoadingSpinner.propTypes = {
  loadingMessage: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  loadingMessage: 'Loading',
};

export default LoadingSpinner;
