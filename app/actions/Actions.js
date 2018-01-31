import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

const Actions = {
  addVisita(visita, data) {
    AppDispatcher.dispatch({
      type: ActionTypes.ADD_VISITA,
      visita: visita,
      data: data
    });
  }
};

export default Actions;
