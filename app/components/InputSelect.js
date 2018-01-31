import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class InputSelect extends Component {

  static propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      onChange: PropTypes.func,
      value: PropTypes.string,
      options: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this)
    this.state = {
      value: ""
    };
  }

  setValue(id, selection) {

    this.setState({ "value": selection.value })
    this.props.onChange(id, selection)
  }

  render() {
    return (
      <div className="form-group col-md-12 col-lg-12">
        <label className='control-label col-md-3 col-lg-3' htmlFor={this.props.id}>{this.props.name}</label>
        <div className="input-group col-md-9  col-lg-9">
            <Select
              id={this.props.id}
              options={this.props.options}
              onChange={(seleccion) => {this.setValue(this.props.id, seleccion)}}
              value={this.state.value}
              clearable={false}
              removeSelected={false}
              disabled={false}
            />
        </div>
      </div>
    );
  }
}
export default InputSelect;
