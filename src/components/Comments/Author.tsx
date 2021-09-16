import { css } from 'emotion'
import React from 'react'

import colors from '../../constants/colors'

interface AuthorProps {
  children: React.ReactNode
}
const Author: React.FC<AuthorProps> = ({ children }) => {
  return <b className={AuthorStyle}>{children}</b>
}

const AuthorStyle = css`
  color: ${colors.text};
`

export default Author
