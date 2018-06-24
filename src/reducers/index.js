import * as ActionsConst from '../const/const'

const initialState = {loading: true}

export default function state(state = initialState, {type, payload}) {
  switch (type) {

    case ActionsConst.GET_DATA_REQUEST:
      return {...state, loading: true}

    case ActionsConst.GET_DATA_SUCCESS:
      payload.newProfiles.visible = true
      return {...state, loading: false, ...payload}

    case ActionsConst.GET_DATA_ERROR:
      return {error: payload}

    case ActionsConst.CLOSE_HEADR:
      state.newProfiles.visible = false
      return {...state}

    case ActionsConst.VIDEO_PREPARE:
      return {...state, loading: true}

    case ActionsConst.VIDEO_READY:
      const id = payload
      state.videos.sort((a, b) => a.id === id ? -1 : b.id === id ? 1 : 0)
      return {...state, loading: false}
    default:
      return state
  }
}