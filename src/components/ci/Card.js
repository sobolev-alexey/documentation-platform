import React from 'react'
import styled, { css } from 'styled-components'
import logo from './../../assets/Logo.svg'

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div class="card">
    <img class="card__image" src="assets/1.png" alt="IOTA intro" />
    <a href="#" class="card__label text text--level5">What is IOTA?</a>
    </div>)
  }
}
 export default Card
