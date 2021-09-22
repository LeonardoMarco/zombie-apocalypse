import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    display: none;
  }
`

export const Input = styled.input`
  background: #919D53;
  padding: 10px;
  width: 80%;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #585858;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #585858;
  }
`

export const Select = styled.select`
  background: #6A723C;
  padding: 10.5px;
  color: #CCC6C6;
  width: 20%;
  border: none;
  text-align: center;
  

  &:focus {
    outline: none;
  }
`
