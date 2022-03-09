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
            
            <select className="language-selection" {...props}>
              <option >-----</option>
              <option value="en">English</option>
              <option value="hu">Hungarian</option>
              <option value="es">Spanish</option>
              <option value="it">Italian</option>
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
