/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';

const Numpad = (props) => (
  <div className="numpad" role="button" onClick={(e) => props.pressButton(e)}>
    <button type="button" className="numpad__all-clean numpad__button all-clean">AC</button>
    <button type="button" className="numpad__backspace numpad__button backspace">&larr;</button>
    <button type="button" className="numpad__divide numpad__button symbol">/</button>
    <button type="button" className="numpad__multiply numpad__button symbol">&times;</button>
    <button type="button" className="numpad__seven numpad__button number">7</button>
    <button type="button" className="numpad__eight numpad__button number">8</button>
    <button type="button" className="numpad__nine numpad__button number">9</button>
    <button type="button" className="numpad__minus numpad__button symbol">-</button>
    <button type="button" className="numpad__four numpad__button number">4</button>
    <button type="button" className="numpad__five numpad__button number">5</button>
    <button type="button" className="numpad__six numpad__button number">6</button>
    <button type="button" className="numpad__plus numpad__button symbol">+</button>
    <button type="button" className="numpad__one numpad__button number">1</button>
    <button type="button" className="numpad__two numpad__button number">2</button>
    <button type="button" className="numpad__three numpad__button number">3</button>
    <button type="button" className="numpad__zero numpad__button number">0</button>
    <button type="button" className="numpad__dot numpad__button symbol">.</button>
    <button type="button" className="numpad__result numpad__button result">=</button>
  </div>
);

Numpad.propTypes = {
  pressButton: PropTypes.func,
};

Numpad.defaultProps = {
  pressButton: PropTypes.func,
};

export default Numpad;
