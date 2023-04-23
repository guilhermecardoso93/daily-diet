import React from 'react'
import { Message, Container } from './styles'

type Props = {
  message: string
}

export function EmptyList({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
