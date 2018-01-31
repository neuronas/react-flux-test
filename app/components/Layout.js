import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Store from '../stores/Store';
import Actions from '../actions/Actions';
import _ from 'lodash';

import InputText from './InputText';
import InputSelect from './InputSelect';
import Button from './Button';
import Mensaje from './Mensaje';
import Listado from './Listado';

class _Layout extends Component {

  static getStores() {
    return [Store];
  }

  static calculateState() {
    return {
      store: Store.getState(),
      onAddVisita: Actions.addVisita,
    };
  }

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.fillCountriesOptions = this.fillCountriesOptions.bind(this);
    this.setItemCombo = this.setItemCombo.bind(this);
    this.onComponentValueChange = this.onComponentValueChange.bind(this);
    this.saludar = this.saludar.bind(this);
    this.onSuccess = this.onSuccess.bind(this);

    this.state = {
      countries: [],
      paises : [],
      inputValues: [],
      change: false
    };
  }

  componentWillMount() {
    this.getData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.countries && !this.state.paises.length) {
      this.fillCountriesOptions(this.state.countries)
    }
  }

  fillCountriesOptions(data) {
    this.setState({
      paises: data.map((data, key) => ({ label: data.name, value: key }))
    })
  }

  getData() {
    let method, params
    method = "https://restcountries.eu/rest/v2/all"
    params = {
              accept: 'application/json'
            }
    fetch(method, params)
    .then((res) => {
      return res.json()
    }).then((countries) => {
      this.setState({"countries": countries})
    })
    .catch((res) => {
      console.log("fail", res)
    })
  }

  onComponentValueChange(e) {
    let val = [];
    val[e.target.id] = e.target.value;
    this.setState({ "inputValues": _.extend(this.state.inputValues, val) });
  }

  setItemCombo(index, selection) {
    var val = [];
    val[index] = selection.label;
    this.setState({ "inputValues": _.extend(this.state.inputValues, val) });
  }

  saludar() {
    let data = this.state.inputValues
    this.setState({ dataSaludo: data, change: true })
  }

  onSuccess() {
    this.setState({ change: false });
  }

  render() {
    return (
      <div className="container">
        <div className="text-align-center">
          <h2>Ejercicio Intive</h2>
        </div>
        <div className="box-left">

          <form className="form-inline">
            <div className="row">
              <InputText id="nombre" name="Nombre" onChange={this.onComponentValueChange} value={this.state.inputValues.monto} />

              <InputSelect id="pais" name="Pais" options={this.state.paises} onChange={this.setItemCombo}/>

              <InputText id="edad" name="Edad" onChange={this.onComponentValueChange} value={this.state.inputValues.monto} />

              <Button name="Saludar" onClick={this.saludar} >
                {"Saludar"}
              </ Button >
            </div>
          </form>

          <Mensaje dataSaludo={this.state.dataSaludo} onSuccess={this.onSuccess} change={this.state.change} addVisita={this.state.onAddVisita} store={this.state.store.toJS()} />

        </div>

        <div className="box-right rounded">
          <Listado store={this.state.store.toJS()} onClick={this.saludar} />
        </div>

      </div>
    );
  }
}

const Layout = Container.create(_Layout);
export default Layout;
