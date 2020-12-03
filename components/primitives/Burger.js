import {useState} from "react";

import RightMenu from "./RightMenu"

import styled from "styled-components";

function Burger() {
  const [open, setOpen]= useState(false)
  return(
    <>
    <BurgerStyled open={open} onClick={() => setOpen(!open)}>
      <div/>
      <div/>
      <div/>
    </BurgerStyled>
    <RightMenu open={open}/>
    </>
  )
}

const BurgerStyled = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
z-index: 20;
display: none;
top: 25px;

@media (max-width: 1000px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  margin-left: 90%;
}

div {
  width: 2rem;
  height: 0.2rem;
  border-radius: 2px;
  background: white;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`

export default Burger;