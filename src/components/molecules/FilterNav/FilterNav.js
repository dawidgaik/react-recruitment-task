import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './FilterNav.styles';
import PropTypes from 'prop-types';

const FilterNav = ({ filterButtons, updateAppsList }) => {
  return (
    <Wrapper>
      {filterButtons.map((button) => (
        <Button
          key={button}
          value={button}
          onClick={updateAppsList}
          aria-label={`Filter by ${button} category`}
        >
          {button}
        </Button>
      ))}
    </Wrapper>
  );
};

FilterNav.propTypes = {
  filterButtons: PropTypes.array,
  updateAppsList: PropTypes.func,
};

export default FilterNav;
