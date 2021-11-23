import React from 'react';
import TableHeader from 'components/atoms/TableHeader/TableHeader';
import TableBody from 'components/atoms/TableBody/TableBody';
import PropTypes from 'prop-types';

const Table = ({ filteredApps }) => (
  <table>
    <thead>
      <TableHeader />
    </thead>
    <tbody>
      {filteredApps &&
        filteredApps.map((appData) => (
          <TableBody
            key={appData.id}
            name={appData.app}
            version={appData.version}
            author={appData.author?.name}
          />
        ))}
    </tbody>
  </table>
);

Table.propTypes = {
  filteredApps: PropTypes.array,
};

export default Table;
