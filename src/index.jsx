import React from 'react';
import { render } from 'react-dom';

import WeatherPage from './page/weather-page';

const root = document.getElementById('root');

render(
  <React.StrictMode>
    <WeatherPage />
  </React.StrictMode>,
  root
);
