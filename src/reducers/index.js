import * as ActionsConst from '../const/const'

const initialState = {}

export default function state(state = initialState, action) {
  switch (action.type) {
  case ActionsConst.GET_DATA_SUCCESS:

    return state
  default:
    return state
  }
}