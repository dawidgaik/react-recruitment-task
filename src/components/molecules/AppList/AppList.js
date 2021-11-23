import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'components/atoms/Accordion/Accordion';
import Table from 'components/molecules/Table/Table';

const AppList = ({ matureApp, betaApp }) => {
  return (
    <>
      <Accordion title="Mature Applications" isOpen={true} id="mature-app">
        <Table filteredApps={matureApp} />
      </Accordion>
      <Accordion title="Beta Application" id="beta-app">
        <Table filteredApps={betaApp} />
      </Accordion>
    </>
  );
};

AppList.propTypes = {
  matureApp: PropTypes.array,
  betaApp: PropTypes.array,
};

export default AppList;
