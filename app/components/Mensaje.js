import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Mensaje extends Component {

  static propTypes = {
    dataSaludo: PropTypes.array,
    onChange: PropTypes.func,
    change: PropTypes.bool,
    onSuccess: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.setSaludo = this.setSaludo.bind(this)
    this.state = {
      name: "",
      country: "",
      years: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.change && !this.props.change) {
      if (nextProps.dataSaludo) {
        this.setSaludo(nextProps.dataSaludo)
      }
    }
  }

  setSaludo(data) {
    let name =data.nombre,
        country = data.pais,
        years = data.edad;
    if (name && country && years) {
      const now = new Date();
      let dateBorn = new Date();
      dateBorn.setFullYear( now.getFullYear() - (parseFloat(years)+1) )
      const futureDate = new Date("01/01/2019");
      const dif = futureDate.getFullYear() - now.getFullYear()
      const willBeYear = parseFloat(years) + parseFloat(dif)
      this.setState({
        name: name,
        country: country,
        years: willBeYear,
        day: futureDate.getDate(),
        month: futureDate.getMonth()+1
      })
      this.props.addVisita({name: name, country: country, dateBorn: dateBorn}, this.props.store)
      this.props.onSuccess()
    }
  }

  render() {
    let name = this.state.name,
    country = this.state.country,
    day = this.state.day,
    month = this.state.month,
    years =this.state.years;
    return (
      <div className="form-group col-md-12 col-lg-12">
        {
          day && month
        ?
            <h3>Hola {name} de {country}. el dia {day} del {month} tendrás {years} años</h3>
        :
          ""
        }
      </div>
    );
  }
}

export default Mensaje;
