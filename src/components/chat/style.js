import styled from 'styled-components'

export const Window = styled.div`
  flex: auto;
  max-height: calc(100% - 80px);
  height: 100%;
  background: #dddfe2;
  overflow: auto;
`

export const ChatWrapper = styled.div`
  width: 300px;
  height: 400px;
  max-height: 400px;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
`

export const ChatForm = styled.div`
  flex: 0 0 auto;
  height: 60px;
  background: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
`

export const MessageWrapper = styled.input`
  height: 59px;
  line-height: 60px;
  outline: 0 none;
  border: none;
  width: calc(100% - 60px);
  color: black;
  text-indent: 10px;
  font-size: 12pt;
  padding: 0;
  background: #ffffff;
`

export const MessageButton = styled.button`
  float: right;
  outline: 0 none;
  border: none;
  background: #dddfe2;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 2px 0 0 0;
  margin: 10px;
`
