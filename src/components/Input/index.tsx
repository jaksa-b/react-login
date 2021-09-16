import { css } from 'emotion'
import React from 'react'

import colors from '../../constants/colors'
import { InputChangeEvent } from '../../hooks/useForm'

interface InputProps {
  name?: string
  type?: string
  placeholder?: string
  value?: string
  onChange: ({ name, value }: InputChangeEvent) => void
}

const Input: React.FC<InputProps> = ({ onChange, name = '', ...props }) => (
  <input {...props} name={name} className={InputStyle} onChange={e => onChange({ name, value: e.target.value })} />
)

const InputStyle = css`
  border: 1px solid ${colors.border};
  border-radius: 5px;
  display: block;
  padding: 16px 8px;
  width: 100%;
  box-sizing: border-box;
`

export default Input
