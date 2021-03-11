import PropTypes from 'prop-types'
import React from 'react'
import { Creators as ChatAction } from '../../store/ducks/chat'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from './style'

const Fab = props => {
  const handleButtonClick = () => {
    props.toggleChat()
  }

  return (
    <Button
      onClick={() => {
        handleButtonClick()
      }}
    >
      {props.text}
    </Button>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(ChatAction, dispatch)

export default connect(null, mapDispatchToProps)(Fab)

Fab.propTypes = {
  text: PropTypes.string.isRequired,
  toggleChat: PropTypes.func.isRequired
}
