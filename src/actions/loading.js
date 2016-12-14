import { SHOW_LOADING_BAR, HIDE_LOADING_BAR } from '../constants/actionTypes'


export const showLoading = () => {
  return {
    type: SHOW_LOADING_BAR
  }
}

export const hideLoading = () => {
  return {
    type: HIDE_LOADING_BAR
  }
}
