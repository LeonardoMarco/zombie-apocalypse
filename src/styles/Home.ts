import styled from 'styled-components'

export const Container = styled.div`
  width: 40%;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 769px) {
    width: 95%;
    margin: 0;
  }
  
  @media screen and (min-width: 770px) and (max-width: 860px) {
    width: 80%;
  }
`