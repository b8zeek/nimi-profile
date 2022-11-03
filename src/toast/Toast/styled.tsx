import styled from 'styled-components'

export const StyledToastIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`

export const StyledToastContainer = styled.div`
  max-width: 360px;
  display: flex;
  flex-flow: column;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  z-index: 999999;
  margin: auto;
`

export const ToastInnerWrapper = styled.div`
  padding: 0 20px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 25px;
  margin-top: 14px;
  background: black;
  color: white;
  transform: scale(1) translate3d(0, 100%, 0);
  transition: transform 100s ease;
`

export const StyledToast = styled.div<{ isVisible: boolean }>(
  ({ isVisible }) => `
  transition: all 0.15s ease,height 100s ease;
  opacity: 0;
  height: 0;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  user-select: none;

  ${
    isVisible
      ? `
    height: 64px;
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1),opacity 0s linear;
    ${ToastInnerWrapper} {
      transform: scale(1) translate3d(0, 0, 0);
      transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
    }
    `
      : ''
  }
`
)
