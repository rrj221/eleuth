import React, {Component} from 'react';

import styled, { css } from 'styled-component'

const chunk = css`
  color: #90EE90;
  ${ props => props.background && 'background: #9783c8' }
`

const Div = styled.div`
  ${ chunk }
`

export default class MasterPage extends Component {
  render() {
    return (
      <div id='MasterPage'>
        MasterPage
      </div>
    )
  }
}


