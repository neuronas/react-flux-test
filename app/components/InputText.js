import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {

  static propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      onChange: PropTypes.func,
      value: PropTypes.string,
  }

  render() {
    return (
      <div className="form-group col-md-12 col-lg-12">
        <label className='control-label col-md-3 col-lg-3' htmlFor={this.props.id}>{this.props.name}</label>
        <div className="input-group col-md-9  col-lg-9">

          <input
            id={this.props.id}
            type="text"
            name={this.props.name}
            onChange={this.props.onChange}
            className="form-control rounded"
            value={this.props.value}
          />

        </div>
      </div>
    );
  }
}

export default InputText;
