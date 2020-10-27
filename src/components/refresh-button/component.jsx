import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import refreshIcon from '../../assets/refresh-icon.png';

const refreshPage = () => window.location.reload();

const StyledButton = styled(Button)`
  width: 15%;
  img {
    filter: invert(1);
  }
`;

const RefreshButton = () => {
  return (
    <>
      <StyledButton
        data-qa="refresh-button"
        onClick={() => refreshPage()}
        variant="outline-light"
      >
        <img src={refreshIcon} alt="refresh-icon" />
      </StyledButton>
    </>
  );
};

export default RefreshButton;
