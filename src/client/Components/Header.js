import React, {Component} from 'react';

import styled from 'styled-components';

const Wrapper = styled.section`
border-bottom: 1px solid #e5e5e5;
  padding: 0 $padding;
  h1 {
    margin: 0;
    line-height: 2em;
    small {
      font-size: 0.5em;
`;

export default class Header extends Component {
  render () {
    return (
    <Wrapper>
    <header className="header-component">
      <h1>Eleuth<small> Travel like a boss</small></h1>
    </header>
    </Wrapper>
      );
  }
}