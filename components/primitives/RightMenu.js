import styled from "styled-components"

import Link from 'next/link'

function RightMenu({ open }) {
  return(
    <MenuList open={open}>
      <li>OUR STORY</li>
      <li>
        <Link href="/ourservices">
          <a>OUR SERVICES</a>
        </Link>
      </li>
      <OtherItems>GALLERY</OtherItems>
      <OtherItems>CONTACT US</OtherItems>
    </MenuList>
  )
}

const MenuList = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;

li{
  padding-left: 25px;
  padding-right: 35px;
  font-size: 14px;
  height: 20px;
  align-self: center;
  color: white;
}
  @media (max-width: 1000px) {
    flex-flow: column nowrap;
    position: fixed;
    background: #04182f;
    opacity: 80%;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    margin-top: 0px;
    right: 0;
    height: 50%;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    padding-top: 2.5rem;

    li{
      font-size: 20px;
      padding-top: 30px;
      padding-bottom: 30px;
      color: white;
      margin-right: 23px;
    }
  }
`

const OtherItems = styled.li`
display: none;

@media (max-width: 1000px){
      display: flex;
      font-size: 20px;
      padding-top: 30px;
      padding-bottom: 30px;
      color: white;
      margin-right: 23px;
}
`
export default RightMenu;
