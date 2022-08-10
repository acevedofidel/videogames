import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../henry_game_app.png'
import {DivStyled, ButtonStyled, ImgStyled} from "./LandingPage"

export default function LandingPage() {

  return (
      <DivStyled>
        <ImgStyled src={img} alt="img not found" />
        <Link to='/videogames'><ButtonStyled>Enter</ButtonStyled></Link>
      </DivStyled>
    )
};