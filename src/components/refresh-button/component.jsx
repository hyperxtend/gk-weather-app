import React from 'react';
import { Button } from 'react-bootstrap';

const refreshPage = () => window.location.reload();

const RefreshButton = () => {
  return (
    <>
      <Button data-qa="refresh-button" onClick={() => refreshPage()}>
        Refresh
      </Button>
    </>
  );
};

export default RefreshButton;
