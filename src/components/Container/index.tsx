import { css } from 'emotion'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={container}>{children}</div>
}

const container = css`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 16px;
`

export default Container
