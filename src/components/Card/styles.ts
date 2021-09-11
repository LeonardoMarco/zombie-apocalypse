import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme === 'Infected' ? '#B77566' : '#AAB766'};
  padding: 10px;
  margin: 10px 0px;
  color: #585858;
  border-radius: 5px;
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  line-height: 0px;

  img {
    padding: 10px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 18px;
    opacity: 0.8;
  }
`

export const Detail = styled.button`
  cursor: pointer;
  background: none;
  border: none; 
`