import styled from "styled-components";

type BtnProps = {
  principal: boolean
  fontSize?: string
}

const Btn = styled.button<BtnProps>`
  background-color: ${props => props.principal ? 'green' : 'green'};
  font-size: ${props => props.fontSize || '16px'};
`

const BtnDanger = styled(Btn)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Btn principal>Enviar</Btn>
      <Btn fontSize="14px" principal={false}>Cancelar</Btn>
      <BtnDanger as="a" principal>
        <span>Perigo</span>
      </BtnDanger>
    </>
  )
    
}

export default Teste
