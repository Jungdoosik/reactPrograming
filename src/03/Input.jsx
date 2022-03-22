import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent { //1
  constructor(props){
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const {name, onChange} = this.props;
    if(onChange) {
      onChange(name, e.target.value)
    }
  }

  componentDidMount(){//2
    if (this.props.autoFocus){
      this.ref.focous();
    }
  }

  componentDidUpdate(){//3
    if (this.props.autoFocus){
      this.ref.focous();
    }
  }

  setRef(ref){
    this.ref = ref;
  }
  render() {
    const {errorMessage, label, name, value, type, onFocus} = this.props;
    return (
      <label>
        {label} {/* 4 */}
        <input
          id={console.log(`input_${name}`)}
          ref = {this.setRef}
          onChange={this.handleChange}//5
          onFocus={onFocus}//6
          value={value}
          type={type}
          />
          {errorMessage && <span className='error'>{errorMessage}</span>}{/* 7 */}
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),//8
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text', //9
};

export default Input;