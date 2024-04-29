import React from 'react'
import useCanvas from '../Hooks/useCanvas'
import * as S from './style'

const Canvas = props => {

  const { draw, ...rest } = props
  const ref = useCanvas(draw)

  return <S.Canvas ref={ref} {...rest} width="600" height="400"/>
}

export default Canvas