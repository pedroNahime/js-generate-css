import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Fab from '../fab'
import Chat from '../chat'
import { Wrapper } from './style'
import { bindActionCreators } from 'redux'
import { Creators as ChatAction } from '../../store/ducks/chat'

const Init = props => {
  return <Wrapper>{props.active ? <Chat /> : <Fab text="?" />}</Wrapper>
}

export const mapStateToProps = state => ({
  active: state.chat.active
})

const mapDispatchToProps = dispatch => bindActionCreators(ChatAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Init)

Init.propTypes = {
  active: PropTypes.bool.isRequired
}
