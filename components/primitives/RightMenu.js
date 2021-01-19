import styled from "styled-components";

import Link from "next/link";

function RightMenu({ open }) {
  return (
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
  );
}

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-right: 20px;

  li {
    font-size: 14px;
    height: 20px;
    color: white;
    padding-left: 25px;
  }
  @media (max-width: 1000px) {
    flex-flow: column nowrap;
    position: fixed;
    background: #04182f;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    margin-top: 0px;
    right: 0;
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    padding-top: 2.5rem;

    li {
      font-size: 20px;
      padding-top: 50px;
      padding-bottom: 100px;
      color: white;
      margin-right: 23px;
    }
  }
`;

const OtherItems = styled.li`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
    color: white;
    margin-right: 23px;
  }
`;
export default RightMenu;
