import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class Store extends ReduceStore {
  getInitialState() {
    return Immutable.fromJS({
      visitas : []
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.TYPE_001:
        return state;
      case ActionTypes.TYPE_002:
        return Immutable.Map(action.data).set("text", "Flux is...").toJS();
      case ActionTypes.ADD_VISITA:
        return state.update("visitas", list => list.push(action.visita))
      default:
        return state;
    }
  }
}

export default new Store(AppDispatcher);
