import { css } from 'emotion'
import React from 'react'

import colors from '../../constants/colors'

interface ButtonProps {
  disabled: boolean
  children: string
}

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <button disabled={disabled} className={buttonStyle}>
      {children}
    </button>
  )
}

const buttonStyle = css`
  background: ${colors.primary};
  border-radius: 6px;
  padding: 16px;
  width: 100%;
  color: #fff;
  display: block;
  border: none;
  cursor: pointer;
`

export default Button
