import { React } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Assets/Logo.png";

export default function NavBar() {
  return (
    <Nav>
      <a href="https://esteban-luna.web.app/" className="link-home" to="/">
        <img className="img" src={logo} alt="Error" />
      </a>
      <Link className="link-projects" to="/">
        <button className="backv"> Volver </button>
        <button className="back"> Volver a los Proyectos</button>
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 3rem;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0rem;
  padding: 1rem;
  .link-home {
    width: 50%;
    color: white;
    text-decoration: none;
    padding: 0 0 0 1rem;
  }

  .link-projects {
    width: 20%;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .img {
    width: 60%;
    display: flex;
    align-items: flex-start;
    margin: 0;
  }

  .back {
    display:none;
    color: white;
    width: 100%;
    height: auto;
    padding: 0.3rem;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 30%,
      rgba(9, 9, 121, 1) 50%,
      rgba(5, 89, 174, 1) 90%,
      rgba(2, 0, 36, 1) 100%
    );
    cursor: pointer;
    border-radius: 5px;
    border: none;
  }

  .backv {
    display:block;
    color: white;
    width: 100%;
    height: auto;
    padding: 0.3rem;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(9, 9, 121, 1) 30%,
      rgba(5, 89, 174, 1) 70%
    );
    cursor: pointer;
    border-radius: 5px;
    border: none;
  }

  @media (min-width: 450px) {
    height: 5rem;
  }

  @media (min-width:768px) {
    .img{
      width:40%;
    }
    .back{
      display:block;
    }
    .backv{
      display:none;
    }
}

@media (min-width:1024px) {
  .img{
      width:30%;
    }
}

`;
