import * as ActionsConst from '../const/const'

const initialState = {}

export default function state(state = initialState, {type, payload}) {
  switch (type) {
  case ActionsConst.GET_DATA_SUCCESS:
    payload.newProfiles.visible = true
    return payload
  case ActionsConst.GET_DATA_ERROR:
    return {error: payload}
  case ActionsConst.CLOSE_HEADR:
    state.newProfiles.visible = false
    return {...state}
  default:
    return state
  }
}