import { css } from 'emotion'
import React from 'react'

import colors from '../../constants/colors'

interface FormItemProps {
  label: string
  children: React.ReactNode
}

const Button: React.FC<FormItemProps> = ({ label, children }) => {
  return (
    <div className={formItemStyle}>
      <label className={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

const formItemStyle = css`
  margin-bottom: 16px;
  width: 100%;
`
const labelStyle = css`
  color: ${colors.text};
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
`

export default Button
