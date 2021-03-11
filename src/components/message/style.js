import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0;

  &:first-of-type {
    margin-top: 8px;
  }
`

export const MessageBox = styled.div`
  display: flex;
  background: ${props => (props.sender === 'client' ? '#2671ff' : '#5b5e6c')};
  padding: 10px 10px 0 10px;
  border-radius: ${props =>
    props.sender === 'client' ? '6px 0 0 6px' : '0 6px 6px 0'};
  max-width: 80%;
  width: auto;
  float: ${props => (props.sender === 'client' ? 'right' : 'left')};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
`

export const Flr = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: calc(100% - 50px);
`

export const MessageWrap = styled.div`
  flex: 1 0 auto;
  text-align: ${props => (props.sender === 'client' ? 'right' : 'left')};
`

export const MSG = styled.p`
  display: inline-block;
  font-size: 11pt;
  line-height: 13pt;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 4px 0;
`
