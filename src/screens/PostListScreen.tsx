import React from 'react'
import { Link } from 'react-router-dom'

import { listPosts, Post } from '../../api'
import { Container, Loading, Message, Paragraph, Title } from '../components'
import { useAsync, useAuth } from '../hooks'

export const PostListScreen: React.FC = () => {
  const { state } = useAuth()
  const { data = [], loading, error } = useAsync(() => listPosts(state.token), [])

  const soryByNewerDate = (post: Post, post2: Post) => {
    return post2?.createdAt.toMillis() - post?.createdAt.toMillis()
  }

  if (error.message) {
    return (
      <Container>
        <Message type="error">{error.message}</Message>
      </Container>
    )
  }

  return (
    <Container>
      {loading ? <Loading /> : null}
      {data.sort(soryByNewerDate).map(({ id, title, text, likes, createdAt }) => (
        <div key={id}>
          <Link key={id} to={`/post/${id}`}>
            <Title>{title}</Title>
          </Link>
          <Paragraph trim={5} align="justify">
            {text}
          </Paragraph>
          <Paragraph>Likes: {likes}</Paragraph>
          <Paragraph>CreatedAt: {createdAt.toFormat('MMMM dd, yyyy')}</Paragraph>
        </div>
      ))}
    </Container>
  )
}
