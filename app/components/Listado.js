import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Mensaje extends Component {

  static propTypes = {
    dataListado: PropTypes.object
  }

  render() {
    let visitas = this.props.store.visitas
    let items = []
    let dateFormated;
    if ( visitas.length > 0 && !_.isEmpty(visitas[0])) {
      let count = 0;
      let itemsFormated = []
      for (var i in  visitas) {
        let date = new Date(visitas[i].dateBorn)
        let day = date.getDate()
        let month = date.getMonth()
        month++
        let year = date.getFullYear()
        dateFormated = day + '/' + month + '/' + year;
        items.push({ key: i, date: dateFormated , name: visitas[i].name, country: visitas[i].country})
      }
    }
    return (
      <div className="form-group col-md-12 col-lg-12">
        <h6>Visitantes Anteriores</h6>

        {
          {items}
        ?
          items.map((item, key) => (
            <div key={item.key}><h5>{item.name} - {item.country} - {item.date}</h5></div>
          ))
        :
          ""
        }
      </div>
    );
  }
}
export default Mensaje;
