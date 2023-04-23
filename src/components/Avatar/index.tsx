import React from 'react'

import { Image } from 'react-native'
import { AvatarContainer, ImageAvatar } from './styles'

const avatarUrl = 'https://github.com/guilhermecardoso93.png'

export function Avatar() {
  return (
    <AvatarContainer>
      <ImageAvatar source={{ uri: avatarUrl }} />
    </AvatarContainer>
  )
}