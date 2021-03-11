import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  toggleChat: [],
  getChat: [],
  addMessage: ['message']
})

export const MoviesTypes = Types
export default Creators
/**
 * Handlers
 */
export const INITIAL_STATE = {
  active: false,
  messages: []
}

export const toggle = (state = INITIAL_STATE) => ({
  ...state,
  active: !state.active
})
export const get = (state = INITIAL_STATE) => ({
  ...state
})

export const addMessage = (state = INITIAL_STATE, action) => ({
  ...state,
  messages: [...state.messages, action.message]
})

/**
 * Reducer
 */
export const reducers = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_CHAT]: toggle,
  [Types.GET_CHAT]: get,
  [Types.ADD_MESSAGE]: addMessage
})
