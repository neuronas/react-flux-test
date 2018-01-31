import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    return (
      <div className="form-group col-md-12 col-lg-12">
        <div className="input-group col-md-12  col-lg-12">

          <button type="button" className="btn btn-blue" onClick={this.props.onClick}>
            {this.props.children}
          </button>

        </div>
      </div>
    );
  }
}
export default Button;
