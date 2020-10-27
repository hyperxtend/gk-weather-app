import React from 'react';
import PropTypes from 'prop-types';
import { Container, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledSpinnerContainer = styled.div`
  margin-top: 2rem;
  transform: scale(1.5);
`;

const LoadingSpinner = ({ loadingMessage }) => {
  return (
    <StyledContainer>
      <h2>{loadingMessage}</h2>
      <StyledSpinnerContainer>
        <Spinner animation="border" variant="light" />
      </StyledSpinnerContainer>
    </StyledContainer>
  );
};

LoadingSpinner.propTypes = {
  loadingMessage: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  loadingMessage: 'Loading',
};

export default LoadingSpinner;
