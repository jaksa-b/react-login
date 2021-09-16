import { css } from 'emotion'
import React from 'react'

import colors from '../../constants/colors'

interface MessageProps {
  type: string
  children: string
}

const Message: React.FC<MessageProps> = ({ type, children }) => {
  const message = css`
    color: ${colors.text};
    padding: 32px;
    text-align: center;
    margin-bottom: 32px;
    background: ${type === 'error' ? colors.danger : ''};
  `

  return <div className={message}>{children}</div>
}

export default Message
