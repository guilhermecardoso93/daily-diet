import { Button } from '../Button'
import { ButtonsField, ButtonsLine, Container, Title } from './styles'
import React from 'react'

type Props = {
  title: string
  buttonCancel: () => void
  buttonOk: () => void
}

export function Alert({ title, buttonCancel, buttonOk }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <ButtonsField>
        <ButtonsLine>
          <Button onPress={buttonCancel} title="Cancel" color="off" />
        </ButtonsLine>
        <ButtonsLine>
          <Button onPress={buttonOk} title="Delete" color="gray" />
        </ButtonsLine>
      </ButtonsField>
    </Container>
  )
}