import React from 'react';

import { StyledButton } from '../styled-components';
import refreshIcon from '../../assets/refresh-icon.png';

const refreshPage = () => window.location.reload();

const RefreshButton = () => {
  return (
    <StyledButton
      data-qa="refresh-button"
      onClick={() => refreshPage()}
      variant="outline-light"
    >
      <img src={refreshIcon} alt="refresh-icon" />
    </StyledButton>
  );
};

export default RefreshButton;
