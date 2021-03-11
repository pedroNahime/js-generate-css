import React from 'react'
import { Container, MessageBox, Flr, MessageWrap, MSG } from './style'
import PropTypes from 'prop-types'

function Message(props) {
  return (
    <Container>
      <MessageBox sender={props.sender}>
        <Flr>
          <MessageWrap>
            <MSG>{props.message}</MSG>
          </MessageWrap>
        </Flr>
      </MessageBox>
    </Container>
  )
}

export default Message

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}
