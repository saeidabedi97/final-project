import React from 'react';
import PropTypes from 'prop-types';
import './BTNedit.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, className, ...props }) => {
  return (
    <button
      type="button"
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      data-size={size}
      // style={backgroundColor && { backgroundColor }}
      {...props}
      className={'button' + ' ' + className}
    >
      {label}
    </button>
   
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  
};

Button.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  onClick: undefined,
};
