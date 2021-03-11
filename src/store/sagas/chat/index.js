import { select } from 'redux-saga/effects'

export function* toggleChat() {
  try {
    const state = yield select()
    console.log(state)
  } catch (e) {
    console.log(e)
  }
}
