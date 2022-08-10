import React from 'react'
import image from '../../XVo6.gif'
import styled from 'styled-components'

const LoaderStyled = styled.img`
  width: 10%;
  height: 20%;
  margin: 0 auto;
  display: block;
  `

const Loader = () => {
  return (
    <LoaderStyled src={image} alt="" />
  )
}

export default Loader