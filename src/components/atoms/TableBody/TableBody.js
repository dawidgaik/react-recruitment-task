import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ name, version, author }) => (
  <tr>
    <td>{name}</td>
    <td>{version}</td>
    <td>{author}</td>
  </tr>
);

TableBody.propTypes = {
  name: PropTypes.string,
  version: PropTypes.string,
  author: PropTypes.string,
};

export default TableBody;
