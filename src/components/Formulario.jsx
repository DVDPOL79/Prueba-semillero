import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

function Formulario()  {


    return (
        <Fragment>
            
            <form className="row">
                <div className='columna1'>
            <p type="Name:"><input placeholder="Nombres y Apellidos" required></input></p>
  <br />
  <p type="Email:"><input placeholder="Email" required></input></p>
  <br />
  <p type="Company:"><input placeholder="Empresa / Organización" required></input></p>
  <br />
  <p type="Country:"><input placeholder="Pais" required></input></p></div>
  <div className='columna2'>
  <p type="Number:"><input placeholder="Teléfono" required></input></p>
  <br />
  <h5>Mensaje:</h5> <br />
  <p type="Message:"><input placeholder="" className='message'></input></p>
  <br /><button className='redondo'>Enviar</button>
  </div>
            </form>
          
        </Fragment>
    );
}
 
export default Formulario;

const Fragment = styled.div`
.redondo{
    background-color: black;
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #fff;
    float:right;
    color:white;
    font-size:30px;
  }

background-color:black;
margin:0;
h5{
    color:#5f5f5f;
}
.columna1{
    width:650px;padding:70px 100px;
}

.columna2{
    width:650px;padding:70px 100px;
}

input{width:100%;
    padding:30px;
    background:none;
    border:0;
    transition:all .3s;
    border-bottom:1px
     solid #bebed2
    }
.input:focus{
    border-bottom:2px solid #78788c
}
.p:before{
    content:attr(type);
    display:block;
    margin:28px 0 0;font-size:14px;color:#fff}
.button{float:right;padding:8px 12px;margin:8px 0 0;border:2px solid #78788c;background:0;color:#5a5a6e;cursor:pointer;transition:all .3s}
.button:hover{background:#78788c;color:#fff}

div{font-size:20px;font-color: #fff;}

.message{
    border: 1px solid #fff;
    border-radius:8px;
    height: 250px;
}
`