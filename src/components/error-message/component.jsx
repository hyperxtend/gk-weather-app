import React from 'react';
import PropTypes from 'prop-types';

import { StyledErrorMessage } from '../styled-components';

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
