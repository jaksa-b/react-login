import { css } from 'emotion'
import React from 'react'

import colors from '../../constants/colors'

interface TitleProps {
  align?: string
  level?: number
  children?: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children, align, level }) => {
  const textStyle = css`
    text-align: ${align};
    color: ${colors.text};
  `
  if (level === 3) {
    return <h3 className={textStyle}>{children}</h3>
  }
  return <h1 className={textStyle}>{children}</h1>
}

export default Title
