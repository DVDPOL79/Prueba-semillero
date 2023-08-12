import React, { useState } from 'react'
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuButton from './MenuButton';
import styled from 'styled-components';
import background from './img/escaleras.jpg'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
    <Cabecera>
      <NavContainer>
      <img src="https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png" />
        <div className={`links ${clicked ? 'active' : ''}`}>
        <a className='home' href="#">   </a>
            <a className='home' href="#">Home</a>
            <a href="#">Casos de éxito</a>
            <a href="#">Mercados</a>
            <a href="#">Paises</a>
            <a href="#">Somos VASS</a>
            <a href="#">Cómo lo hacemos</a>
            <a href="#">Insights</a>
            <a href="#">Noticias</a>
            <a href="#">VASS Research</a>
            <a href="#">En</a>
            
         </div>
         <a href="#"><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></a>
         <div className='burguer'>
         
        <MenuButton clicked={clicked} handleClick={handleClick}></MenuButton>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        </NavContainer>
        </Cabecera>
    </>
  )
}

export default Navbar
//
const Cabecera =styled.header`
background-image: url(${background});
background-position: 50% 5%;
height: 700px;
@media(min-width: 1440px){
  height: 500px;
}
@media(min-width: 768px){
  height: 600px;
}
`

const NavContainer = styled.nav`
Background-color:Black;
a{
  color: white;
  text-decoration: none;
  margin-right: 3rem;
}

.links{
  position: absolute;
  top: -700px;
  left: -2000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all .5s ease;
  
  a{
    color: white;
    font-size: 2rem;
    display: block;
  }
  @media(min-width: 1440px){
    position: initial;
    
    a{
      font-size: 1rem;
      color: white;
      display: inline;
    }
    .home{
      color: transparent;
    }
    display: block;
  }
}
.links.active{

  background-color: black;
  width: 100%;
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  
  top: 7%;
  left: 0;
  right: 0;
  text-align: left;
  a{
    font-size: 2rem;
    margin-top: 1rem;
    color: white;
    margin-left: 2%;
  }
  
}
.burguer{
  @media(min-width: 1440px){
    display: none;
  }
}

`
const BgDiv = styled.div`
  
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    background-color: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `

