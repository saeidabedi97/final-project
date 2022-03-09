import React from 'react';
import PropTypes from 'prop-types';
// import'./src/App.css';
import './SelectEdit.css'; 

/**
 * Primary UI component for user interaction
 */
export const SelectOption = ({backgroundColor, size,  ...props }) => {
  return (
   <div>
            {" "}
            <select className="language-selection">
              <option>English</option>
              <option>Hungarian</option>
              <option>Spanish</option>
              <option>Italian</option>
            </select>
            </div>
  );
};

SelectOption.propTypes = {
  
 
  backgroundColor: PropTypes.string,
 
  size: PropTypes.oneOf(['small', 'medium', 'large']),

};

SelectOption.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
