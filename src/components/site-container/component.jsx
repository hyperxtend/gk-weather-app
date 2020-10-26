import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSiteContainer = styled(Container)``;

const SiteContainer = () => (
  <StyledSiteContainer data-qa="site-container">
    <h1>You got this!</h1>
  </StyledSiteContainer>
);

export default SiteContainer;