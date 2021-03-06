import React, { useState } from 'react'
import { Creators as ChatAction } from '../../store/ducks/chat'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Window,
  ChatForm,
  ChatWrapper,
  MessageWrapper,
  MessageButton,
  HeaderWrapper,
  HeaderTitleWrapper,
  HeaderTitle,
  HeaderSubtitle,
  HeaderButtonClose,
  WindowContent
} from './style'
import PropTypes from 'prop-types'
import Message from '../message'

function Chat(props) {
  const [text, setText] = useState('')

  const handleButtonSend = () => {
    props.addMessage({ sender: 'client', message: text })
  }

  const handleButtonCloseClick = () => {
    props.toggleChat()
  }
  return (
    <ChatWrapper>
      <HeaderWrapper>
        <HeaderTitleWrapper>
          <HeaderTitle> Chat </HeaderTitle>
          <HeaderSubtitle> Powered by Company </HeaderSubtitle>
        </HeaderTitleWrapper>
        <HeaderButtonClose
          onClick={() => {
            handleButtonCloseClick()
          }}
        >
          X
        </HeaderButtonClose>
      </HeaderWrapper>
      <Window>
        <WindowContent>
          {props.messages.map((message, index) => (
            <Message
              key={index}
              message={message.message}
              sender={message.sender}
            />
          ))}
        </WindowContent>
      </Window>
      <ChatForm>
        <MessageWrapper value={text} onChange={e => setText(e.target.value)} />
        <MessageButton onClick={() => handleButtonSend()}>Send</MessageButton>
      </ChatForm>
    </ChatWrapper>
  )
}

export const mapStateToProps = state => ({
  messages: state.chat.messages
})

const mapDispatchToProps = dispatch => bindActionCreators(ChatAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

Chat.propTypes = {
  toggleChat: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  messages: PropTypes.array
}
