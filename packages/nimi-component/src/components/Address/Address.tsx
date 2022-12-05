import { ReactNode } from 'react'
import styled from 'styled-components'

type AddressProps = {
  children: ReactNode
  onClick: () => void
}

export function Address({ children, onClick }: AddressProps) {
  return <Button onClick={onClick}>{children}</Button>
}

export const Button = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #ffffff;
  padding: 6px;
  box-shadow: 0px 5px 18px rgba(156, 149, 233, 0.2);
  cursor: pointer;
`
