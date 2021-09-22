import styled from 'styled-components'


export const Container = styled.div`
  background: #000000ad;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ModalClose = styled.div`
  cursor: pointer;
  position: absolute;
  color: white;
  right: 25px;
  top: 25px;
  font-size: 20px;
  font-weight: bold;
`

export const Modal = styled.div`
  background: #7a8258;
  width: 20%;
  margin: 50px auto;
  border-radius: 5px;
  padding: 20px;
`

export const Row = styled.div`
  padding: 20px;
    background: #474c2d;
    margin: 10px;
    border: solid 3px #a3b34f;
    border-radius: 5px;
    color: white;
`

export const ChangePersona = styled.button`
  padding: 20px;
  width: 100%;
  border: solid 0px transparent;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  background: ${props => props.theme !== 'Infected' ? '#B77566' : '#66b768'};
`
