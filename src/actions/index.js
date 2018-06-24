import * as ActionsConst from '../const/const'

export const getData = () => dispatch => {
  dispatch({type: ActionsConst.GET_DATA_REQUEST})

  fetch('/public/data.json')
    .then(response => response.json())
    .then(data => window.setTimeout(() => dispatch({
      type: ActionsConst.GET_DATA_SUCCESS,
      payload: data
    }), 500))
    .catch(error => dispatch({
      type: ActionsConst.GET_DATA_ERROR,
      payload: error
    }))
}

export const closeHeader = () => dispatch => dispatch({type: ActionsConst.CLOSE_HEADR})

export const playVideo = id => dispatch => {
  dispatch({type: ActionsConst.VIDEO_PREPARE})

  window.setTimeout(() => dispatch({type: ActionsConst.VIDEO_READY, payload: id}), 500)
}