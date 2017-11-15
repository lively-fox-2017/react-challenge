import { RECIEVE_DEPARTURE } from '../actions/DepartureActions'

const defaultState = {
  schedules: []
}

const DepartureReducer = (state=defaultState, action) => {
  switch (action.type){
    case RECIEVE_DEPARTURE:
      return {...state, schedules: action.payload.schedules}
    default:
      return state
  }
}

export default DepartureReducer
