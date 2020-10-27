import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorMessage = styled.h2`
  color: #ed3a0e;
  font-size: 4rem;
  font-weight: 600;
`;

const ErrorMessage = ({ errorMessage }) => {
  return (
    <>
      <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
    </>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

ErrorMessage.defaultProps = {
  errorMessage: 'Sorry could not find data',
};

export default ErrorMessage;
