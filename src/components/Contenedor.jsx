import React from 'react'
import styled from 'styled-components';

function Contenedor() {
  return (
    <>
    <ContainerText>
    <div>
        
        <br />
        
        <div className='divma'><h3 className='Negrita'><b>EMPEZEMOS A HACERLO SENCILO</b></h3><div class="vl"><h3><br />Nos emociona impulsar tu transformación digital</h3></div>
        </div> </div>
        
        </ContainerText>
        <br />
        <br />
        </>
  )
}

export default Contenedor
    
const ContainerText = styled.div`
margin-top: 3rem;
margin-left: 3rem;
color: black;
display: flex;
align-items: flex-end;

h3{
    margin-left: 3rem;
    
}
.vl {
    border-left: 6px solid black;
    height: 100px;
    @media(max-width: 768px){
        
        h3{
            margin-left: 3rem;
            margin-top: 3rem ;
        }
      }
   
  }
`