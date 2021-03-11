import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  flex: 0 0 auto;
  white-space: pre;
  overflow-wrap: break-word;

  &:first-of-type {
    margin-top: 8px;
  }
`

export const MessageBox = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: ${props =>
    props.sender === 'client' ? 'flex-end' : 'flex-start'};
  position: relative;
  padding: 0px 6px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
`

export const Flr = styled.div`
  position: relative;
  margin: 8px;
  border-radius: 8px;
  color: rgb(255, 255, 255);
  max-width: 60%;
  background: ${props => (props.sender === 'client' ? '#2671ff' : '#5b5e6c')};
`

export const MessageWrap = styled.div`
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  text-align: ${props => (props.sender === 'client' ? 'right' : 'left')};
`

export const MSG = styled.p`
  display: inline-block;
  font-size: 11pt;
  line-height: 13pt;
  color: #fff;
  margin: 0 0 4px 0;
`
