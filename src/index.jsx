import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherPage from './page/weather-page';
import { StyledSiteContainer } from './components/styled-components';

const root = document.getElementById('root');

render(
  <StyledSiteContainer>
    <WeatherPage />
  </StyledSiteContainer>,
  root
);
