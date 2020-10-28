import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';

export const StyledSiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#60a8eb, #3b9cf7, #1983e6, #007aeb);
  color: #e1e4e6;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  letter-spacing: 1px;
  overflow: hidden;
`;

export const StyledErrorMessage = styled.h2`
  color: #ed3a0e;
  font-size: 4rem;
  font-weight: 600;
`;

export const StyledLoaderContainer = styled(Container)`
  text-align: center;
`;

export const StyledSpinnerContainer = styled.div`
  margin-top: 2rem;
  transform: scale(1.5);
`;

export const StyledButton = styled(Button)`
  width: 10%;
  img {
    filter: invert(1);
  }

  @media (max-width: 1480px) {
    img {
      margin: 0 0 0 -3px;
    }
  }
`;

export const StyledDataContainer = styled(Container)`
  width: 45%;
  background-color: rgba(250, 250, 250, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem 2rem 1rem 2rem;

  h1,
  h2 {
    font-size: 3rem;
    padding-top: 1rem;
  }

  @media (max-width: 1480px) {
    width: 400px;
    padding: 0.5rem;
    button {
      width: 50px;
    }

    @media (max-width: 700px) {
      width: 300px;
  }
`;

export const WeatherIconContainer = styled.div`
  img {
    transform: scale(1.5);
  }
`;
