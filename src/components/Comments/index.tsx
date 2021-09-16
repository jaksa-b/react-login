import React from 'react'

import { Comment } from '../../../api'
import Paragraph from '../Paragraph'
import Title from '../Title'
import Author from './Author'

interface CommentsProps {
  title?: string
  comments?: Comment[]
}

const Comments: React.FC<CommentsProps> = ({ title = 'Comments', comments = [] }) => {
  return (
    <div>
      <Title level={3}>
        {title}({comments.length})
      </Title>
      {comments.map(({ author, text }, index) => (
        <div key={index}>
          <Author>{author}</Author>
          <Paragraph>{text}</Paragraph>
        </div>
      ))}
    </div>
  )
}

export default Comments
