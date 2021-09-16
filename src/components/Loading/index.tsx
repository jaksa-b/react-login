import { css } from 'emotion'
import React from 'react'

import colors from '../../constants/colors'

const Loading: React.FC = () => {
  return <div className={loadingStyle}>Loading...</div>
}

const loadingStyle = css`
  color: ${colors.text};
  text-align: center;
`

export default Loading
