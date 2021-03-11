import styled from 'styled-components'

export const Window = styled.div`
  flex: 1 1 0%;
  display: flex;
  overflow: hidden auto;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`

export const WindowContent = styled.div`
  height: 100%;
  width: 100%;
`

export const ChatWrapper = styled.div`
  width: 380px;
  height: 480px;
  max-height: 480px;
  flex-direction: column;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
`

export const ChatForm = styled.div`
  min-height: 52px;
  display: flex;
  position: relative;
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

export const HeaderWrapper = styled.div`
  border-radius: 3px 3px 0 0;
  height: 48px;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: rgb(23, 34, 65);
`

export const HeaderTitleWrapper = styled.div`
  width: 100%;
  padding: 0 10px 0 10px;
`

export const HeaderTitle = styled.p`
  font-family: 'Roboto-Bold', sans-serif;
  font-weight: bolder;
  font-size: 14px;
  height: 16px;
  margin: 0;
`

export const HeaderSubtitle = styled.p`
  font-size: 10px;
  height: 11px;
  color: #a1acc9;
  margin: 0;
`

export const HeaderButtonClose = styled.button`
  background: inherit;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  margin: 14px 18px;
  padding: 0;
  outline: none;
`
