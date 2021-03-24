import React from 'react';
import { arrayOf, string } from 'prop-types';

const Display = ({ expression }) => (
  <div className="display">
    <input type="text" className="display__input" value={expression.join('')} disabled />
  </div>
);

Display.propTypes = {
  expression: arrayOf(string),
};

Display.defaultProps = {
  expression: ['0'],
};

export default Display;
