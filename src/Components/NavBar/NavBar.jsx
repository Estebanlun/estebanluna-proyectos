import { React, useState } from "react";
import logo from "../../Assets/Logo.png";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";


export default function NavBar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <a className="linkcito" href="https://esteban-luna.web.app/">
          <img className="div" src={logo} alt="Error" />
        </a>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a
            onClick={clicked ? handleClick : !clicked ? "" : handleClick}
            href="https://esteban-luna.web.app/"
          >
            {" "}
            Sobre mi{" "}
          </a>
          <a
            onClick={clicked ? handleClick : !clicked ? "" : handleClick}
            href="/"
          >
            {" "}
            Proyectos{" "}
          </a>
          <a
            onClick={clicked ? handleClick : !clicked ? "" : handleClick}
            href="https://esteban-luna.web.app/contact"
          >
            {" "}
            Contacto{" "}
          </a>
          
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .div {
    width: 60%;
    display: flex;
    align-items: flex-start;
    padding:0.5rem;
    margin: 0;
    @media (min-width: 768px) {
      width: 40%;
    }
  }
  .linkcito {
    color: white;
    text-decoration: none;
    width: 60%;
    padding: 0 0 0 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    text-align: center;
    transition: all 1.0s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
      text-decoration: none;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      width: 100%;
      display: flex;
      gap: 1.2rem;
      justify-content: flex-end;
      padding: 0 3rem 0 0;
      a {
        font-size: 1.4rem;
        color: white;
        display: flex;
        justify-content: center;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 1%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 3;

    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #000;
  position: absolute;
  top: -4000px;
  left: -4000px;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 1.0s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
`;


// import { React } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import logo from "../../Assets/Logo.png";

// export default function NavBar() {
//   return (
//     <Nav>
//       <a href="https://esteban-luna.web.app/" className="link-home" to="/">
//         <img className="img" src={logo} alt="Error" />
//       </a>
//       <Link className="link-projects" to="/">
//         <button className="backv"> Volver </button>
//         <button className= "back"> Volver a los Proyectos</button>
//       </Link>
//     </Nav>
//   );
// }

// const Nav = styled.nav`
//   width: 100%;
//   min-height: 4rem;
//   background-color: #000;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;

//   .link-home {
//     width: 45%;
//     color: white;
//     text-decoration: none;
//     padding: 0 0 0 1rem;
//   }

//   .link-projects {
//     width: 20%;
//     color: white;
//     text-decoration: none;
//     border-radius: 5px;
//   }
  
//   .img {
//     width: 60%;
//     display: flex;
//     align-items: flex-start;
//     margin: 0;
//   }

//   .back {
//     display:none;
//     color: white;
//     width: 100%;
//     height: auto;
//     padding: 0.3rem;
//     background: rgb(2, 0, 36);
//     background: linear-gradient(
//       180deg,
//       rgba(2, 0, 36, 1) 30%,
//       rgba(9, 9, 121, 1) 50%,
//       rgba(5, 89, 174, 1) 90%,
//       rgba(2, 0, 36, 1) 100%
//     );
//     cursor: pointer;
//     border-radius: 5px;
//     border: none;
//   }

//   .backs {
//     display:none;
//   }

//   .backv {
//     display:block;
//     color: white;
//     width: 100%;
//     height: auto;
//     padding: 0.3rem;
//     background: rgb(2, 0, 36);
//     background: linear-gradient(
//       180deg,
//       rgba(9, 9, 121, 1) 30%,
//       rgba(5, 89, 174, 1) 70%
//     );
//     cursor: pointer;
//     border-radius: 5px;
//     border: none;
//   }

//   @media (min-width: 450px) {
//     height: 5rem;
//   }

//   @media (min-width:768px) {
//     .img{
//       width:40%;
//     }
//     .back{
//       display:block;
//       height:2.5rem;
//     }
//     .backv{
//       display:none;
//     }
// }

// @media (min-width:1024px) {
//   height:6rem;
//   .img{
//       width:25%;
//     }

//     .back{
   
//     height:3rem;

//     }

// }

// `;
