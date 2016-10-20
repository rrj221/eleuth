import React, {Component} from 'react';

import styled from 'styled-components';


// const styles = {

//   logo: {
//     width: 200,
//   },

//   header: {
//     fontSize: "15px",
//     fontWeight: "600px",
//     padding: "2px 5px",
//     border: "1px solid #eae9e9",
//     borderRadius: "4",
//     backgroundColor: '#f3f2f2',
//     color: '#3a3a3a',
//   }
//   .header-component {
//   border-bottom: 1px solid #e5e5e5;
//   padding: 0 $padding;
//   h1 {
//     margin: 0;
//     line-height: 2em;
//     small {
//       font-size: 0.5em;
//     }
//   }
// }
// };

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

// <div style={styles.logo}>
//       <header className="header">Eleuth Travel</header>
//     </div>