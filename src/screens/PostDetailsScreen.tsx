import React from 'react'
import { useParams } from 'react-router-dom'

import { retrievePost } from '../../api'
import { Comments, Container, Loading, Message, Paragraph, Title } from '../components'
import { useAsync, useAuth } from '../hooks'

type Params = {
  postId: string
}

export const PostDetailsScreen: React.FC = () => {
  const { postId } = useParams<Params>()
  const { state } = useAuth()
  const { data, loading, error } = useAsync(() => retrievePost(state.token, Number(postId)), [postId])

  if (error.message) {
    return (
      <Container>
        <Message type="error">{error.message}</Message>
      </Container>
    )
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <Title>{data?.title}</Title>
            <Paragraph align="justify">{data?.text}</Paragraph>
            <Paragraph>Likes: {data?.likes}</Paragraph>
            <Paragraph>CreatedAt: {data?.createdAt.toFormat('MMMM dd, yyyy')}</Paragraph>
          </div>
          <Comments comments={data?.comments} title="Comments" />
        </div>
      )}
    </Container>
  )
}
