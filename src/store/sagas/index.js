import { all, takeLatest } from 'redux-saga/effects'

import { Types as ChatTypes } from '../ducks/chat'
import { toggleChat } from './chat'

export default function* rootSaga() {
  yield all([takeLatest(ChatTypes.TOGGLE_CHAT, toggleChat)])
}
