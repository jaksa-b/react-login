import { css } from 'emotion'
import React from 'react'

import colors from '../../constants/colors'

interface ParagraphProps {
  align?: string
  children?: React.ReactNode
  trim?: number
}

const Paragraph: React.FC<ParagraphProps> = ({ align, trim, children }) => {
  const textStyle = css`
    overflow: hidden;
    text-align: ${align};
    color: ${colors.text};
    display: -webkit-box;
    -webkit-line-clamp: ${trim};
    -webkit-box-orient: vertical;
  `
  return <p className={textStyle}>{children}</p>
}

export default Paragraph
