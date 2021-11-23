import React, { useState } from 'react';
import { Wrapper, StyledDetails } from './Accordion.styles';
import PropTypes from 'prop-types';

const Accordion = ({ title, children, isOpen, id }) => {
  //add aria-expanded accessibility support
  const [isSelected, setSelected] = useState(isOpen);

  const toggleAttribute = () => {
    setSelected(!isSelected);
  };

  return (
    <Wrapper>
      <StyledDetails open={isOpen}>
        <summary
          id={id}
          onClick={toggleAttribute}
          {...(isSelected
            ? { 'aria-expanded': 'true' }
            : { 'aria-expanded': 'false' })}
          aria-controls={`${id}-panel`}
        >
          <h3>{title}</h3>
        </summary>
        <div id={`${id}-panel`} aria-labelledby={id} role="region">
          {children}
        </div>
      </StyledDetails>
    </Wrapper>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  id: PropTypes.string,
};

export default Accordion;
